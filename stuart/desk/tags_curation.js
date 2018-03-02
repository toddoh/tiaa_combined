var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

router.route('/tags')
	.post(function(req, res, next){
		var tags = JSON.parse(req.body.tags),
			deskkey = req.body.deskkey;

		if (deskkey != process.env.DESK_KEY)
			return res.clientErr('UNAUTHORIZED_ACCESS');

		if (tags.length <= 0)
			return res.clientErr('NO_TAGS');
		
		var newTs = new Date();
		var tagsObj = {ts: newTs, tagset: tags};
		var collection = db.collection('discover_tags');
		collection.insertOne(tagsObj, function (err, result) {
			if (err) {
				return res.sysErr("DB_INSERT_ERR", err);
			} else {
				res.json(tags);
			}
		});
	});

module.exports.router = router;