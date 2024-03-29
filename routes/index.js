var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'Bdcash Protocol',
  description: ' - Home page'
  });
});

/* GET team page */
router.get('/team', function(req, res, next) {
	res.render('team', { 
	title: 'Bdcash Protocol',
	description: ' - Our Team and contributors'
	});
  });

 /* GET download page */
router.get('/donwload', function(req, res, next) {
	res.render('donwload', { 
	title: 'Bdcash Protocol',
	description: ' - Donwloads your wallets app.'
	});
  }); 

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
	  title: 'Bdcash Protocol',
	  description: ' - About project'
	  });
});

/* GET about page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
	  title: 'Bdcash Protocol ',
	  description: ' - Send your feedback or question'
	  });
});


module.exports = router;
