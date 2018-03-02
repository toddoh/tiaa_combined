var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/usasociety')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_usasociety');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(3).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};

							var nHotArray = result.map(function (bf) {
								bf.latest = null;
								return bf;
							});

                            response = nHotArray;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/v1.1/usasociety')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_usasociety');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(2).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};

							var nHotArray = result.map(function (bf) {
								bf.hotstories = null;
								return bf;
							});

                            response = nHotArray;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/usapolitics')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_usapolitics');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(3).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            var nHotArray = result.map(function (bf) {
								bf.latest = null;
								return bf;
							});

                            response = nHotArray;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/v1.1/usapolitics')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_usapolitics');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(2).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            var nHotArray = result.map(function (bf) {
								bf.hotstories = null;
								return bf;
							});

                            response = nHotArray;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/usatechindustry')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_usatechindustry');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(2).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/usabusiness')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_usabusiness');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(2).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/usasports')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_usasports');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(2).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/usafinance')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_usafinance');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(2).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/western-en-world')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_world');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(2).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

router.route('/western-en-gaming')
	.get(function(req, res, next){
        var collection = db.collection('hotstories_gaming');
		collection.count(function(err, total) {
			if (err) {
				return res.sysErr("DB_ERR", err);
			} else {
				if (total > 0) {
					collection.find({}).sort({ts: -1}).limit(2).toArray(function (err, result) {
						if (err) {
							return res.sysErr("DB_ERR", err);
						}

						if (!result.length) {
							return res.clientErr("NO_HOTSTORIES_CONTACT_SUPPORT");
						} else {
                            var response = {};
                            response = result;
                            res.json(response);
                        }

                    });
                } else {
					return res.sysErr("NO_HOTSTORIES");
				}
            }
        });
    });

Date.prototype.rmHours = function(h) {
   this.setTime(this.getTime() - (h*60*60*1000));
   return this/1000 | 0;
}

module.exports.router = router;