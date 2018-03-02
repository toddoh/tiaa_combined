var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/notice').get(authUser, function(req, res, next){
    var collection = db.collection('notice_subscribers');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({}).sort({ts: -1}).limit(5).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (!result.length) {
                        return res.clientErr("NO_NOTICE_CONTACT_SUPPORT");
                    } else {
                        var response = {};
                        response = result;
                        res.json(response);
                    }

                });
            } else {
                return res.sysErr("NO_NOTICE_CONTACT_SUPPORT");
            }
        }
    });
});

module.exports.router = router;