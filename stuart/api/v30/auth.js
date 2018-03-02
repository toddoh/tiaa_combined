var express = require('express'),
	jwt = require('jsonwebtoken');
var router = express.Router();

// Middleware to process verify JWT
router.use(function(req, res, next){
	var accessToken = (req.body && req.body.accessToken) || (req.query && req.query.accessToken) || req.headers['x-access-token'];

	if (accessToken) {
		jwt.verify(accessToken, process.env.JWT_KEY, function(err, decoded){
			if (err) return res.clientErr(err);

			req.jwt = decoded;
			next();
		})
	} else {
		next();
	}
});

router.post('/auth', function(req, res, next){
	var email = req.body.email,
		password = req.body.password,
		user;
	
	var uid = null;
	var uname = null;
    var collection = db.collection('subscribers');
    collection.count(function(err, total) {
        if (err) {
            return res.sysErr("DB_ERR", err);
        } else {
            if (total > 0) {
                collection.find({email: email}).toArray(function (err, result) {
                    if (err) {
                        return res.sysErr("DB_ERR", err);
                    }

                    if (!result.length) {
                        return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
                    } else {
                        user = {
                            id: result[0]._id,
                            email: result[0].email
                        };
						if (result[0].username) uname = result[0].username;
						uid = result[0]._id;
						uemail = result[0].email;

                        rootquire('encrypt').compare(result[0].password, password, compareCypherHandler);
                    }
                });
            } else {
                return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL");
            }
        }
    });

	function compareCypherHandler(err, verified){
		if (err) return res.error("ENCRYPT_COMPARE_ERR", err);
		if (!verified) return res.clientErr("INVALID_SUBSCRIBER_CREDENTIAL_cypher");

		var response = {};
		var token = createToken(user);

		response.userId = uid;
		response.email = uemail;
		response.token = token;
		if (uname) response.username = uname;
		res.json(response);
	}
})

router.get('/auth/renew', authUser, function(req, res, next){
	var token = createToken(req.jwt.user);

	res.json({
		token: token
	})
})

router.get('/auth/test', authUser, function(req, res, next){
	res.json({
		success: true
	});
})

function createToken(user) {
	var payload = {
			user: {
				id: user.id,
				email: user.email
			}
		},
		options = {
			expiresIn: '730d' // token lasts 182 days (roughly 6 months or half a year)
		};

	return jwt.sign(payload, process.env.JWT_KEY, options);
}

function authUser(req, res, next){
	if (!req.jwt)
		return res.clientErr("FAILED_AUTH_NO_JWT");
	if (!req.jwt.user)
		return res.clientErr("FAILED_AUTH_NO_USER");
	if (!req.jwt.user.id)
		return res.clientErr("FAILED_AUTH_NO_USERID");

	next();
}

module.exports.router = router;
module.exports.createToken = createToken;
module.exports.authUser = authUser;
