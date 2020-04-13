var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

firebaseConfig = {
  apiKey: "AIzaSyARPrcJ4HENCyYx1xWOnr5Z386jlj4ir2g",
  authDomain: "fir-node-c52fc.firebaseapp.com",
  databaseURL: "https://fir-node-c52fc.firebaseio.com",
  projectId: "fir-node-c52fc",
  storageBucket: "fir-node-c52fc.appspot.com",
  messagingSenderId: "571278361366",
  appId: "1:571278361366:web:05147e6e6f71c1f5d70637"
};
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-node-c52fc.firebaseio.com"
});

var db = admin.database();

/* GET home page. */
router.get('/', function(req, res, next) {
  firebase.auth().onAuthStateChanged( (user) => {
    if(user) {
       name = user.displayName;
       mail = user.email;
       res.render('home', {express: 'express',name:name, mail: 'yamada@happy', pass: "yamada"}); 
    } else {
        //処理
        res.render('home', {express: 'express',name:name, mail: 'yamada@happy', pass: "yamada"}); 
    }
  });
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

  res.render('home', {express: 'express', name: name, mail: mail, pass: pass});
});

module.exports = router;
