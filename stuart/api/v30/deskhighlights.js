var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/').post(authUser, function(req, res, next){
    var sectiontype = req.body.sectiontype;

    var scanTs = new Date().rmHours(6);
    var collection = db.collection('deskhighlights_' + sectiontype);
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
                        return res.clientErr("NO_DESKHIGHLIGHTS_CONTACT_SUPPORT");
                    } else {
                        var response = {};
                        response = result;
                        res.json(response);
                    }

                });
            } else {
                return res.sysErr("NO_DESKHIGHLIGHTS");
            }
        }
    });
});

Date.prototype.rmHours = function(h) {
   this.setTime(this.getTime() - (h*60*60*1000));
   return this/1000 | 0;
}

module.exports.router = router;