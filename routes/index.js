var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home Delivery Chef' });
});

router.get('/login', (req, res, next) => {
	res.render('auth/login');
});

module.exports = router;
