var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/briefings/usasociety')
	.get(authUser, function(req, res, next){
		var scanTs = new Date().rmHours(6);
        var collection = db.collection('curation_autobriefing_usasociety');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({ts: { $gte: scanTs } }).sort({ts: -1}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usasociety/:id')
	.get(authUser, function(req, res, next){
		var bfid = req.params.id;

        var collection = db.collection('curation_autobriefing_usasociety');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(bfid)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response.content = result;
                            res.json(response);
                        }
                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usapolitics')
	.get(authUser, function(req, res, next){
		var scanTs = new Date().rmHours(6);
        var collection = db.collection('curation_autobriefing_usapolitics');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({ts: { $gte: scanTs } }).sort({ts: -1}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usapolitics/:id')
	.get(authUser, function(req, res, next){
		var bfid = req.params.id;

        var collection = db.collection('curation_autobriefing_usapolitics');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(bfid)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response.content = result;
                            res.json(response);
                        }
                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usatechindustry')
	.get(authUser, function(req, res, next){
		var scanTs = new Date().rmHours(6);
        var collection = db.collection('curation_autobriefing_usatechindustry');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({ts: { $gte: scanTs } }).sort({ts: -1}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usatechindustry/:id')
	.get(authUser, function(req, res, next){
		var bfid = req.params.id;

        var collection = db.collection('curation_autobriefing_usatechindustry');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(bfid)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response.content = result;
                            res.json(response);
                        }
                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/western-en-world')
	.get(authUser, function(req, res, next){
		var scanTs = new Date().rmHours(6);
        var collection = db.collection('curation_autobriefing_world');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({ts: { $gte: scanTs } }).sort({ts: -1}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/western-en-world/:id')
	.get(authUser, function(req, res, next){
		var bfid = req.params.id;

        var collection = db.collection('curation_autobriefing_world');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(bfid)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response.content = result;
                            res.json(response);
                        }
                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usasports')
	.get(authUser, function(req, res, next){
		var scanTs = new Date().rmHours(6);
        var collection = db.collection('curation_autobriefing_usasports');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({ts: { $gte: scanTs } }).sort({ts: -1}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usasports/:id')
	.get(authUser, function(req, res, next){
		var bfid = req.params.id;

        var collection = db.collection('curation_autobriefing_usasports');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(bfid)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response.content = result;
                            res.json(response);
                        }
                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usabusiness')
	.get(authUser, function(req, res, next){
		var scanTs = new Date().rmHours(6);
        var collection = db.collection('curation_autobriefing_usabusiness');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({ts: { $gte: scanTs } }).sort({ts: -1}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usabusiness/:id')
	.get(authUser, function(req, res, next){
		var bfid = req.params.id;

        var collection = db.collection('curation_autobriefing_usabusiness');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(bfid)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response.content = result;
                            res.json(response);
                        }
                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usafinance')
	.get(authUser, function(req, res, next){
		var scanTs = new Date().rmHours(6);
        var collection = db.collection('curation_autobriefing_usafinance');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({ts: { $gte: scanTs } }).sort({ts: -1}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

router.route('/briefings/usafinance/:id')
	.get(authUser, function(req, res, next){
		var bfid = req.params.id;

        var collection = db.collection('curation_autobriefing_usafinance');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({_id: ObjectID(bfid)}).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_CURATION_BRIEFINGS_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response.content = result;
                            res.json(response);
                        }
                    });
                } else {
					return res.sysErr("NO_CURATION_BRIEFINGS");
				}
            }
        });
    });

Date.prototype.rmHours = function(h) {
   this.setTime(this.getTime() - (h*60*60*1000));
   return this/1000 | 0;
}

module.exports.router = router;