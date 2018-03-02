var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;


router.route('/request')
	.post(authUser, function(req, res, next){
		var userId = req.jwt.user.id,
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
                            if (result[0].referralcode == undefined || result[0].referralcode == "") {
                                var S4 = function() {
                                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                                };
                                
                                var referralCodeId = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
                                
                                collection.update({_id: ObjectID(userId)}, {$set : {"referralcode": referralCodeId}}, function (err, numUpdated) {
                                    if (err) {
                                        return res.sysErr("DB_ERR", err);
                                    }

                                    if (numUpdated) {
                                        collection.update({_id: ObjectID(userId)}, {$set : {"referral_accepted_ids": []}}, function (err, numUpdated) {
                                            if (err) {
                                                return res.sysErr("DB_ERR", err);
                                            }

                                            if (numUpdated) {
                                                response.code = referralCodeId;
                                                res.json(response);
                                            } else {
                                                return res.sysErr("DB_UPDATE_ERR", err);
                                            }
                                        });
                                    } else {
                                        return res.sysErr("DB_UPDATE_ERR", err);
                                    }
                                });
                            } else {
                                return res.clientErr("REFERRAL_CODE_EXISTS");
                            }
						}
					});
				} else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
			}
		});
	})
	.get(authUser, function(req, res, next){
		var subscriberId = req.jwt.user.id;

        var response = {};
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
							if (result[0].referralcode != undefined && result[0].referral_accepted_ids != undefined) {
                                response.code = result[0].referralcode;
                                response.accepted = result[0].referral_accepted_ids;
                                res.json(response);
							} else {
                                return res.clientErr("NO_REFERRAL_CODE_EXIST");
                            }
                        }
                    });
                } else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
            }
        });
	});

router.route('/accept')
	.post(authUser, function(req, res, next){
		var referral = req.body.referral,
            userId = req.jwt.user.id,
			user;

		var response = {};
		var collection = db.collection('subscribers');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({referralcode: referral}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("INVALID_REFERRAL_CODE");
						} else {
                            var targetId = result[0]._id;
                            var acceptedIds = [];
							if (result[0].referral_accepted_ids != undefined) {
								if (result[0].referral_accepted_ids.length > 0) acceptedIds = result[0].referral_accepted_ids;
							}

							var acceptedIdsDuplicatesCheck = acceptedIds.filter(function (key) {
								if (key != undefined) {
									if (key == userId) {
										return key;
									}
								}
							});

							if (acceptedIdsDuplicatesCheck.length <= 0) {
                                collection.update({_id: ObjectID(targetId)}, {$push : {"referral_accepted_ids": userId}}, function (err, numUpdated) {
                                    if (err) {
                                        return res.sysErr("DB_ERR", err);
                                    }

                                    if (numUpdated) {
                                        collection.update({_id: ObjectID(userId)}, {$push : {"referral_accepted_ids": targetId}}, function (err, numUpdated) {
                                            if (err) {
                                                return res.sysErr("DB_ERR", err);
                                            }

                                            if (numUpdated) {
                                                response.userInvited = targetId;
                                                res.json(response);
                                            } else {
                                                return res.sysErr("DB_UPDATE_ERR", err);
                                            }
                                        });
                                    } else {
                                        return res.sysErr("DB_UPDATE_ERR", err);
                                    }
                                });
                            } else {
                                return res.clientErr("ALREADY_USED_REFERRAL_CODE");
                            }
						}
					});
				} else {
					return res.clientErr("NO_SUBSCRIBERS");
				}
			}
		});
	});

module.exports.router = router;