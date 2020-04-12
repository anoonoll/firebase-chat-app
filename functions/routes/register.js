var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/top', function(req, res, next) {
  res.render('register/register-top', { title: 'Express' });
});

router.get('/1', function(req, res, next) {
  res.render('register/register1', { title: 'Express' });
});

module.exports = router;