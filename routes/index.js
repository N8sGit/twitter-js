const express = require('express');
const router = express.Router();
const tweetbank = require('../tweetbank');
const path = require('path');

router.get('/', function(req, res){
  let tweets = tweetbank.list();
  res.render('index', { tweets: tweets, });

});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetbank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});




// router.get('/stylesheets/style.css', function(req, res){
//   res.sendFile("style.css", {root: path.join(__dirname, '../public', 'stylesheets')});
// });

router.use(express.static('public'));






module.exports = router;
