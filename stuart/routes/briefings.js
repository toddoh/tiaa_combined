var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();
var moment = require('moment');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/')
	.get(authUser, function(req, res, next){
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
							var briefingContentsArray = [];
							if (result[0].briefing_contents != undefined && result[0].briefing_contents.length > 0) {
								briefingContentsArray = result[0].briefing_contents;

								var response = {};
								response.content = briefingContentsArray;
								res.json(response);
							} else {
                                var response = {};
								response.content = null;
								res.json(response);
                            }
                        }

                    });
                } else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
            }
        });
    });

router.route('/check')
	.get(authUser, function(req, res, next){
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
							var briefingContentsArray = [];
							if (result[0].briefing_contents != undefined && result[0].briefing_contents.length > 0) {
								briefingContentsArray = result[0].briefing_contents;

								var nbriefingContentsArray = briefingContentsArray.map(function (bf) {
									bf.stories = null;
									return bf;
								});

								var response = {};
								response.content = nbriefingContentsArray;
								res.json(response);
							} else {
                                var response = {};
								response.content = null;
								res.json(response);
                            }
                        }

                    });
                } else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
            }
        });
    });

router.route('/content')
	.post(authUser, function(req, res, next){
		var tagid = req.body.tagid;
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
							var briefingContentsArray = [];
							var todayBriefingTagsArray = [];
							if (result[0].briefing_contents != undefined && result[0].briefing_contents.length > 0) {
								briefingContentsArray = result[0].briefing_contents;

								var newBriefingContentsArray =  _.filter(briefingContentsArray, function (c) {
									return c.keyid == tagid;
								});

								if (newBriefingContentsArray.length > 0) {
									var response = {};
									response.content = newBriefingContentsArray;
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
                } else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
            }
        });
    });

router.route('/new/content')
	.post(authUser, function(req, res, next){
		var keyword = req.body.keyword;
		var sources = req.body.sources;
        var subscriberId = req.jwt.user.id;

		var response = {};
		if (keyword == null || keyword.length <= 0)
			return res.clientErr('INVALID_KEYWORD');

		var keywordsplit = keyword.replace(/\s*$/,"").split(' ');
		keywordsplit = keywordsplit.filter(function (e) {
			return e != "";
		});
		
		var compareinit = rootquire('briefingbot/bot_compare');
		compareinit.start(subscriberId, keywordsplit, sources, function (data) {
			response.content = data;
			res.json(response);
		});
    });

module.exports.router = router;