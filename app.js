const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const tweetbank = require('./tweetbank.js')
const app = express();
const routes = require('./routes');


var locals = {
  title: 'An Example',
  people: [ { name: 'Gandalf'},
            { name: 'Frodo'},
            { name: 'Hermione'}
          ]
}

nunjucks.configure('views', {
  autoescape: true,
  noCache: true
});
nunjucks.render('index.html', locals , function(err, output) {
  console.log(output);
});

const people = [{name: 'Full'}, {name : 'Stacker'}, {name: 'Son'}];
app.engine('html', nunjucks.render);
app.set('view engine', 'html' );

app.use(function(req, res, next){
  console.log(req.method, req.path)

  next();
})

app.use('/', routes)
app.use('/views', express.static('public'));



























app.listen(3000, function(){
  console.log('Listening on port 3000');
})
