var db = require('../db');

module.exports.login = function(req, res) {
	res.render('auth/login');
};
