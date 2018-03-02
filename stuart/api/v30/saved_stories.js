var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();
var SparkPost = require('sparkpost');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/add').post(authUser, function(req, res, next){
    var story = req.body.story,
        userId = req.jwt.user.id,
        user;

    var response = {};

    if (story == null)
        return res.clientErr('INVALID_STORY');

    var collection = db.collection('subscribers');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({_id: ObjectID(userId)}).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (!result.length) {
                        return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
                    } else {
                        var savedStoriesArray = [];
                        if (result[0].saved_stories != undefined && result[0].saved_stories.length > 0) {
                            savedStoriesArray = result[0].saved_stories;
                        }

                        var savedstoriesArrayDuplicatesCheck = savedStoriesArray.filter(function (key) {
                            if (key != undefined) {
                                if (key.tweet_id == story.tweet_id) {
                                    return key;
                                }
                            }
                        });

                        if (savedstoriesArrayDuplicatesCheck.length > 0) {
                            return res.clientErr("DUPLICATE_STORIES_FOUND", err);
                        } else {
                            collection.update({_id: ObjectID(userId)}, {$push : {"saved_stories": story}}, function (err, numUpdated) {
                                if (err) {
                                    return res.sysErr("DB_ERR", err);
                                }

                                if (numUpdated) {
                                    response.contents = story;
                                    res.json(response);
                                } else {
                                    return res.sysErr("DB_UPDATE_ERR", err);
                                }
                            });
                        }

                    }
                });
            } else {
                return res.clientErr("NO_SUBSCRIBERS");
            }
        }
    });
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
                        var savedStoriesArray = [];
                        if (result[0].saved_stories != undefined) {
                            savedStoriesArray = result[0].saved_stories;
                        } else {
                            return res.clientErr("NO_SAVEDSTORIES_EXIST");
                        }

                        res.json(savedStoriesArray);
                    }

                });
            } else {
                return res.clientErr("NO_SUBSCRIBERS");
            }
        }
    });
});

router.route('/saved/delete').post(authUser, function(req, res, next){
    var storyid = req.body.storyid,
        userId = req.jwt.user.id,
        user;

    var response = {};

    var collection = db.collection('subscribers');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({_id: ObjectID(userId)}).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (!result.length) {
                        return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
                    } else {
                        var savedStoriesArray = [];
                        if (result[0].saved_stories != undefined && result[0].saved_stories.length > 0) {
                            savedStoriesArray = result[0].saved_stories;
                        } else {
                            return res.clientErr("NO_SAVEDSTORIES_EXIST", err);
                        }

                        var newsavedStoriesArray = _.filter(savedStoriesArray, function (i) {
                            return i.tweet_id != storyid;
                        });

                        collection.update({_id: ObjectID(userId)}, {$set : {"saved_stories": newsavedStoriesArray}}, function (err, numUpdated) {
                            if (err) {
                                return res.sysErr("DB_ERR", err);
                            }

                            if (numUpdated) {
                                response = storyid;
                                res.json(response);
                            } else {
                                return res.sysErr("DB_UPDATE_ERR", err);
                            }
                        });

                    }
                });
            } else {
                return res.clientErr("NO_SUBSCRIBERS");
            }
        }
    });
});

module.exports.router = router;