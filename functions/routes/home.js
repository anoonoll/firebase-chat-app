var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-node-c52fc.firebaseio.com"
});

var db = admin.database();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {express: 'express'}); 
});

router.post('/', function(req, res, next) {
  var ref = db.ref("protoout/studio");

  var name = req.body.name;
  var mail = req.body.mail;
  var pass = req.body.password;

  var usersRef = ref.child("sensor");
  usersRef.set({
    "name": name,
    "mail": mail,
    "pass": pass
  });

  ref.on("value", function(snapshot) {
    console.log("value Changed!!!");
    console.log(snapshot.val());
  }, 
  function(errorObject) {
    console.log("failed: " + errorObject.code);
  });

  res.render('home', {express: 'express'});
});

module.exports = router;
