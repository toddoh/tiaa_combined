var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

router.route('/list')
	.post(function(req, res, next){
		var deskkey = req.body.deskkey;

		if (deskkey != process.env.DESK_KEY)
			return res.clientErr('UNAUTHORIZED_ACCESS');
        
        var collection = db.collection('subscribers');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_USERS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            var narray = result.map(function (bf) {
								bf.password = null;
                                bf.briefing_contents = null;
								bf.saved_stories = null;
								return bf;
							});

                            response = narray;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_USERS_CONTACT_SUPPORT");
				}
            }
        });
	});

router.route('/list/notags')
	.post(function(req, res, next){
		var deskkey = req.body.deskkey;

		if (deskkey != process.env.DESK_KEY)
			return res.clientErr('UNAUTHORIZED_ACCESS');
        
        var collection = db.collection('subscribers');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_USERS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            var narray = result.map(function (bf) {
								var n = {
									"id": null,
									"email": null,
									"devices": []
								};

								if (bf.subscribed_tags.length <= 0) {
									n.devices = bf.devices;
									n.email = bf.email;
									n.id = bf._id;
									return n;
								}
							});

                            response = narray;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_USERS_CONTACT_SUPPORT");
				}
            }
        });
	});

module.exports.router = router;