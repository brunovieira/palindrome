var express = require('express');
var path = require('path');

var app = express(),
  server = require('http').createServer(app);

var palindromeRoute = express.Router();
require('./routes/palindrome')(palindromeRoute);
app.use('/', palindromeRoute);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

process.on('uncaughtException', function (err) {
  console.log("Ocorreu um erro inesperado: "+err);
  console.log(err.stack);
  //process.exit(1);
});

var port = process.env.PORT || '3000';

console.log("server configurado");
server.listen(port);
