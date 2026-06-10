var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('about', {
    title: 'About',
    about: 'Welcome to the About Page'
  });
});

module.exports = router;