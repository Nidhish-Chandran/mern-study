var express = require('express');
var router = express.Router();

/* GET home page. */

items =["Mern","Java","Python","C++","C#"]


router.get('/', function(req, res, next) {
  res.render('new', { items: items });
});

module.exports = router;
