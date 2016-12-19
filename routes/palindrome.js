var express = require('express');
var router = express.Router();
var palindromeController = require('../controllers/palindrome');

module.exports = function(router){
	router.get('/', palindromeController.index);
  router.get('/palindromeverify/:palindrome', palindromeController.palindromeVerify);
};
