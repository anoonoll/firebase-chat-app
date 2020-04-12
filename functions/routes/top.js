var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/top', function(req, res, next) {
  res.render('top', { title: 'Express' });
});

module.exports = router;
