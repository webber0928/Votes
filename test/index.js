var express = require('express');
var app = express();

// 一个简单的 logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// 响应
app.use(function(req, res, next){
  res.send('Hello World');
});
app.use(express.static(__dirname + '/public'));
app.listen(3000);
