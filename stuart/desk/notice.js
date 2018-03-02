var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/add')
	.post(function(req, res, next){
		var noticetitle = req.body.title,
            noticecontent = req.body.content,
            noticeurl = req.body.url,
            noticeimage = req.body.image,
			deskkey = req.body.deskkey;

		if (deskkey != process.env.DESK_KEY)
			return res.clientErr('UNAUTHORIZED_ACCESS');

        if (noticetitle == undefined || noticetitle == "") {
			return res.clientErr("NO_CONTENT_TITLE");
		}
		
        if (noticecontent == undefined || noticecontent == "") {
			return res.clientErr("NO_CONTENT_MSG");
		}

		var S4 = function() {
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		
		var noticeObjectid = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
		
		var newTs = new Date();
		var noticeObj = {noticeid: noticeObjectid, ts: newTs, title: noticetitle, content: noticecontent, url: noticeurl, image: noticeimage};
		var collection = db.collection('notice_subscribers');
		collection.insertOne(noticeObj, function (err, result) {
			if (err) {
				return res.sysErr("DB_INSERT_ERR", err);
			} else {
				res.json(noticeObj);
			}
		});
	});

module.exports.router = router;