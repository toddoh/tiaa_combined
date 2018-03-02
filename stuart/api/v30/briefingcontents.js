var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();
var SparkPost = require('sparkpost');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/all').get(authUser, function(req, res, next){
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
                allcontents: null
            };

            var briefingTagsArray_omit = _.map(briefingContentsArray, function (data) { return _.omit(data, _.keys(omitmodel)); });
            res.json(briefingTagsArray_omit);
        }
    });
});

router.route('/full').post(authUser, function(req, res, next){
    var keyId = req.body.keyId;
    var subscriberId = req.jwt.user.id;

    var collection = db.collection('subscribers');
    collection.find({_id: ObjectID(subscriberId)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            var briefingContentsArray = [];
            if (result[0].following_briefingtags != undefined && result[0].following_briefingtags.length > 0) {
                briefingContentsArray = result[0].following_briefingtags;

                var briefingContentsArray_match =  _.filter(briefingContentsArray, function (c) {
                    return c.keyid == keyId;
                });

                if (briefingContentsArray_match.length > 0) {
                    var omitmodel = {
                        contents: null
                    };

                    var briefingTagsArray_omit = _.map(briefingContentsArray_match, function (data) { return _.omit(data, _.keys(omitmodel)); });

                    var response = {};
                    response.content = briefingTagsArray_omit;
                    res.json(response);
                } else {
                    var response = {};
                    response.content = null;
                    res.json(response);
                }
            } else {
                var response = {};
                response.content = null;
                res.json(response);
            }
        }
    });
});


module.exports.router = router;