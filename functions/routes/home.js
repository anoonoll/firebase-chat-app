var express = require('express');
var router = express.Router();
var firebase = require("firebase/app");
var admin = require('firebase-admin');

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyARPrcJ4HENCyYx1xWOnr5Z386jlj4ir2g",
  authDomain: "fir-node-c52fc.firebaseapp.com",
  databaseURL: "https://fir-node-c52fc.firebaseio.com",
  projectId: "fir-node-c52fc",
  storageBucket: "fir-node-c52fc.appspot.com",
  messagingSenderId: "571278361366",
  appId: "1:571278361366:web:05147e6e6f71c1f5d70637"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://fir-node-c52fc.firebaseio.com"
});

var name, email, photoUrl, uid, emailVerified;

firebase.auth().onAuthStateChanged( (user) => {
  if(user) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  
  } else {
    //サインインしていなかった時の処理
  }
} );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

module.exports = router;
