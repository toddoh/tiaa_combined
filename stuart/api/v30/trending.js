var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/').post(function(req, res, next){
    var sectiontype = req.body.sectiontype;

    var collection = db.collection('trendingset_' + sectiontype);
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
                        return res.clientErr("NO_TRENDINGSET_CONTACT_SUPPORT");
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