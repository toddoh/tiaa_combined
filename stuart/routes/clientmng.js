var express = require('express'),
 	jwt = require('jsonwebtoken'),
	crypto = require('crypto');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var authUser = rootquire('routes/authentication').authUser;

router.route('/build')
	.get(authUser, function(req, res, next){
        var response = {};
        response.latestStableBuildMajor = 210;
        res.json(response);
    });

module.exports.router = router;