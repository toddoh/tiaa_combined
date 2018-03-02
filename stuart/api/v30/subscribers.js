var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();
var SparkPost = require('sparkpost');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/new').post(function(req, res, next){
    var email = req.body.email,
        password = req.body.password,
        username = req.body.username,
        age = req.body.age,
        gender = req.body.gender,
        user;

    var response = {};

    if (!email || /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(email) === false)
        return res.clientErr("INVALID_EMAIL");
    if (!password)
        return res.clientErr("NO_PASSWORD");
    if (password.length < 6)
        return res.clientErr("TOOSHORT_PASSWORD");
    if (username != null) {
        if (username.length > 15) return res.clientErr("TOOLONG_USERNAME");
        username = username.replace(/[.,#!\^\*;:{}="'_`()%@,$&~+\\|\]\[><\/]/gm, '').replace(/\s{2,}/g, ' ');
    }
    if (!age)
        age = "";
    if (!gender)
        gender = "none";

    var collection = db.collection('subscribers');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({email: email}).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (result.length) {
                        return res.clientErr("EMAIL_TAKEN");
                    } else {
                        encryptHash(password, finalSubscrbInsertHandler);
                    }
                });
            } else {
                encryptHash(password, finalSubscrbInsertHandler);
            }
        }
    });

    function encryptHash (credential, callback) {
        var saltlen = 16;
        var iterations = 10000;
        var keylen = 64;
        var salt = crypto.randomBytes(saltlen);

        crypto.pbkdf2(credential, salt, iterations, keylen,
            function (err, hash) {
                if (err) throw cb(err);
                var encryption = salt.toString('base64')+':'+iterations+':'+Buffer(hash,'binary').toString('base64');
                return callback(null, encryption);
            }
        );
    }

    function finalSubscrbInsertHandler(err, hash) {
        if (err) return res.sysErr("ENCRYPT_ERR", err);
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        
        var referralCodeId = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());

        var passwordHash = hash;
        var userObj = {email: email, username: username, password: passwordHash, referralcode: referralCodeId, referral_accepted_ids: [], age: age, gender: gender, following_briefingtags: [], briefings: [], devices: [], saved_stories: [], subscriptions: []};
        var collection = db.collection('subscribers');
        collection.insertOne(userObj, function (err, result) {
            if (err) {
                return res.sysErr("DB_ERR", err);
            } else {
                var userId = result.insertedId;
                response.userId = userId;
                response.email = email;
                if (username) response.username = username;
                if (age) response.age = age;
                if (gender) response.gender = gender;
                
                var client = new SparkPost(process.env.SPARKPOST_API_KEY);
                client.transmissions.send({
                    content: {
                        "template_id": "welcomeletter-nsr"
                    },
                    recipients: [
                        {address: email}
                    ]
                })
                .then(data => {
                    console.log('Email sent success');
                    console.log(data);
                })
                .catch(err => {
                    console.log('Email request failed');
                    console.log(err);
                });

                response.token = rootquire('routes/authentication').createToken({
                    id: userId,
                    email: email
                });

                res.json(response);
            }
        });
    }
});
	
router.route('/').get(authUser, function(req, res, next){
    var subscriberId = req.jwt.user.id;

    var collection = db.collection('subscribers');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({_id: ObjectID(subscriberId)}).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (!result.length) {
                        return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
                    } else {
                        var response = {};
                        response.email = result[0].email;
                        if (result[0].username) response.username = result[0].username;
                        if (result[0].age) response.age = result[0].age;
                        if (result[0].gender) response.gender = result[0].gender;

                        res.json(response);
                    }
                });
            } else {
                return res.clientErr("NO_SUBSCRIBERS");
            }
        }
    });
});

router.route('/edit').post(authUser, function(req, res, next){
    var email = req.body.email,
        username = req.body.username,
        userId = req.jwt.user.id,
        age = req.body.age,
        gender = req.body.gender,
        user,
        password = req.body.password;

    var response = {};

    if (email != null && /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(email) === false)
        return res.clientErr("INVALID_EMAIL");
    if (password != null && password.length < 6)
        return res.clientErr("TOOSHORT_PASSWORD");
    if (username != null) {
        if (username.length > 15) return res.clientErr("TOOLONG_USERNAME");
        username = username.replace(/[.,#!\^\*;:{}="'_`()%@,$&~+\\|\]\[><\/]/gm, '').replace(/\s{2,}/g, ' ');
    }
        
    var collection = db.collection('subscribers');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                if (password != null) {
                    encryptHash(password, finalSubscrbInsertHandler);
                } else {
                    collection.update({_id: ObjectID(userId)}, {$set : {
                        "email": email,
                        "username": username,
                        "age": age,
                        "gender": gender
                    }}, function (err, numUpdated) {
                        if (err) {
                            return res.sysErr("DB_ERR", err);
                        }

                        if (numUpdated) {
                            response.email = email;
                            response.username = username;
                            response.age = age;
                            response.gender = gender;
                            res.json(response);
                        } else {
                            return res.sysErr("DB_UPDATE_ERR", err);
                        }
                    });
                }
            } else {
                return res.clientErr("NO_SUBSCRIBERS");
            }
        }
    });

    function encryptHash (credential, callback) {
        var saltlen = 16;
        var iterations = 10000;
        var keylen = 64;
        var salt = crypto.randomBytes(saltlen);

        crypto.pbkdf2(credential, salt, iterations, keylen,
            function (err, hash) {
                if (err) throw cb(err);
                var encryption = salt.toString('base64')+':'+iterations+':'+Buffer(hash,'binary').toString('base64');
                return callback(null, encryption);
            }
        );
    }

    function finalSubscrbInsertHandler(err, hash) {
        if (err) return res.sysErr("ENCRYPT_ERR", err);

        var passwordHash = hash;
        var collection = db.collection('subscribers');

        collection.update({_id: ObjectID(userId)}, {$set : {
            "email": email,
            "password": passwordHash,
            "username": username,
            "age": age,
            "gender": gender
        }}, function (err, numUpdated) {
            if (err) {
                return res.sysErr("DB_ERR", err);
            }

            if (numUpdated) {
                response.email = email;
                response.username = username;
                response.age = age;
                response.gender = gender;
                response.password = "updated";
                res.json(response);
            } else {
                return res.sysErr("DB_UPDATE_ERR", err);
            }
        });
    }
});

module.exports.router = router;