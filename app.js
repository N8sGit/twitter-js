const express = require('express');
const morgan = require('morgan')
const app = express();

app.use('/news', function(req, res, next){
  console.log(req.method, req.path)


  next()
})


app.get('/', function(req,res){
  res.send('Welcome!!!')
})


app.get('/news', function (req, res) {
  res.send('Get some news!')
})



























app.listen(3000, function(){
  console.log('Listening on port 3000');
})
