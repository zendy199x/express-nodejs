var db = require('../db');

module.exports.login = function(req, res) {
	res.render('auth/login');
};

module.exports.postLogin = function(req, res) {
	var email = req.body.email;
	var password = req.body.password;

	db.get('user').find({ email: email }).value();

	if(!user) {
		res.render('auth/login', {
			errors: [
				'Use does not exist'
			],
			values: req.body
		});
		return;
	}

	if(user.password !== password) {
		res.render('auth/login', {
			errors: [
				'Wrong password'
			],
			values: req.body
		});
		return;
	}

	res.redirect('/users');
};
