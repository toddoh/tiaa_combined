var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();
var SparkPost = require('sparkpost');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/follow').post(authUser, function(req, res, next){
    var keyword = req.body.keyword,
        userId = req.jwt.user.id,
        user;

    var response = {};

    if (keyword == null || keyword.length <= 0)
        return res.clientErr('INVALID_KEYWORD');

    var keywordsplit = keyword.replace(/\s*$/,"").split(' ');
    keywordsplit = keywordsplit.filter(function (e) {
        return e != "";
    });

    var collection = db.collection('subscribers');
    collection.find({_id: ObjectID(userId)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            var S4 = function() {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            
            var tagObjectid = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
            var subscribedTagsArray = [];
            if (result[0].following_briefingtags != undefined && result[0].following_briefingtags.length > 0) {
                subscribedTagsArray = result[0].following_briefingtags;
            }

            var tagsArrayDuplicatesCheck = subscribedTagsArray.filter(function (key) {
                if (key != undefined) {
                    if (_.isEqual(key.key, keywordsplit) == true) {
                        return key;
                    }
                }
            });

            if (tagsArrayDuplicatesCheck.length > 0) {
                return res.clientErr("DUPLICATE_TAGS_FOUND", err);
            } else {
                var newBriefingContentSubArray = {
                    "keyid": tagObjectid,
                    "key": keywordsplit,
                    "ts": null,
                    "contents": null
                }

                collection.update({_id: ObjectID(userId)}, {$push : {"following_briefingtags": newBriefingContentSubArray}}, function (err, numUpdated) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (numUpdated) {
                        var expressinit = rootquire('briefingbot/bot_express');
                        expressinit.start(userId, keywordsplit, function (data) {
                            //response.briefing = data;
                            
                        });

                        response.contents = newBriefingContentSubArray
                        response.keywords = subscribedTagsArray;
                        res.json(response);
                    } else {
                        return res.sysErr("DB_UPDATE_ERR", err);
                    }
                });
            }
        }
    });
});

router.route('/unfollow').post(authUser, function(req, res, next){
    var keyId = req.body.keyId,
        userId = req.jwt.user.id,
        user;

    var response = {};

    if (keyId == null || keyId.length <= 0)
        return res.clientErr('INVALID_KEYID');

    var collection = db.collection('subscribers');
    collection.find({_id: ObjectID(userId)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            var briefingContentsArray = [];
            if (result[0].following_briefingtags != undefined && result[0].following_briefingtags.length > 0) {
                briefingContentsArray = result[0].following_briefingtags;
            }

            var newBriefingContentsArray =  _.filter(briefingContentsArray, function (c) {
                return c.keyid !== keyId;
            });

            collection.update({_id: ObjectID(userId)}, {$set : {"following_briefingtags": newBriefingContentsArray}}, function (err, numUpdated) {
                if (err) {
                    return res.sysErr("DB_ERR", err);
                }

                if (numUpdated) {
                    response.newContentsSet = newBriefingContentsArray
                    res.json(response);
                } else {
                    return res.sysErr("DB_UPDATE_ERR", err);
                }
            });
        }
    });
});

router.route('/list').get(authUser, function(req, res, next){
    var subscriberId = req.jwt.user.id;

    var collection = db.collection('subscribers');
    collection.find({_id: ObjectID(subscriberId)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            var briefingTagsArray = [];
            if (result[0].following_briefingtags != undefined) {
                briefingTagsArray = result[0].following_briefingtags;
            } else {
                return res.clientErr("NO_BRIEFINGTAGS_EXIST");
            }

            var omitmodel = {
                contents: null,
                allcontents: null
            };

            var briefingTagsArray_omit = _.map(briefingContentsArray, function (data) { return _.omit(data, _.keys(omitmodel)); });
            res.json(briefingTagsArray_omit);
        }
    });
});

module.exports.router = router;