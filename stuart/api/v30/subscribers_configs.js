var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();
var SparkPost = require('sparkpost');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/briefings').post(authUser, function(req, res, next){
    var hour = req.body.hour,
        timezone = req.body.timezone,
        userId = req.jwt.user.id;

    var response = {};

    if (timezone == undefined || hour == undefined) {
        return res.clientErr("INVALID_BRIEFING_TIME_PARAMETERS");
    }

    var timezoneLocation;
    switch (timezone) {
        case 'PST':
            timezoneLocation = 'US_WEST';
            break;
        case 'MST':
            timezoneLocation = 'US_MOUNTAIN';
            break;
        case 'CST':
            timezoneLocation = 'US_CENTRAL';
            break;
        case 'EST':
            timezoneLocation = 'US_EAST';
            break;
        case 'AKST':
            timezoneLocation = 'US_ALASKA';
            break;
        case 'HAST':
            timezoneLocation = 'US_HAWAII';
            break;
        default:
            timezoneLocation = 'US_EAST';
            break;
    }

    var collection = db.collection('subscribers');
    collection.find({_id: ObjectID(userId)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            collection.update({_id: ObjectID(userId)}, {$set :
                {"briefings": {
                    "hour": hour,
                    "timezone": timezoneLocation
                }
            }}, function (err, numUpdated) {
                if (err) {
                    return res.sysErr("DB_ERR", err);
                }

                if (numUpdated) {
                    response = {"briefings":
                        {
                            "hour": hour,
                            "timezone": timezoneLocation
                        }
                    };
                    res.json(response);
                } else {
                    return res.sysErr("DB_UPDATE_ERR", err);
                }
            });

        }
    });
});

router.route('/briefings').get(authUser, function(req, res, next){
    var subscriberId = req.jwt.user.id;

    var collection = db.collection('subscribers');
    collection.find({_id: ObjectID(subscriberId)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            var briefingConfigArray = [];
            if (result[0].briefings != undefined) {
                briefingConfigArray = result[0].briefings;
            } else {
                return res.clientErr("NOT_CONFIGURED_BRIEFING");
            }

            res.json(briefingConfigArray);
        }
    });
});

router.route('/devices').post(authUser, function(req, res, next){
    var deviceid = req.body.deviceid[0],
        userId = req.jwt.user.id,
        user;

    var response = {};
    var collection = db.collection('subscribers');
    collection.find({_id: ObjectID(userId)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            var registeredDevicesArray = [];
            if (result[0].devices != undefined) {
                if (result[0].devices.length > 0) registeredDevicesArray = result[0].devices;
            }

            var tagsArrayDuplicatesCheck = registeredDevicesArray.filter(function (key) {
                if (key != undefined) {
                    if (key.deviceid == deviceid) {
                        return key;
                    }
                }
            });

            if (tagsArrayDuplicatesCheck.length > 0) {
                response.id = deviceid;
                res.json(response);
            } else {
                var newDevice = {
                    "deviceid": deviceid
                };
                collection.update({_id: ObjectID(userId)}, {$push : {"devices": newDevice}}, function (err, numUpdated) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (numUpdated) {
                        response.id = deviceid;
                        res.json(response);
                    } else {
                        return res.sysErr("DB_UPDATE_ERR", err);
                    }
                });
            }

        }
    });
});

router.route('/devices').get(authUser, function(req, res, next){
    var subscriberId = req.jwt.user.id;

    var collection = db.collection('subscribers');
    collection.find({_id: ObjectID(subscriberId)}).toArray(function (err, result) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        }

        if (!result.length) {
            return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
        } else {
            var registeredDevicesArray = [];
            if (result[0].devices != undefined && result[0].devices.length > 0) {
                registeredDevicesArray = result[0].devices;
            } else {
                return res.clientErr("NO_DEVICE_EXISTS");
            }

            res.json(registeredDevicesArray);
        }
    });
});

module.exports.router = router;