var request = require('request');

var PalindromeController = {
  index: function(req, res){
    res.render('index', { title: 'Challenge', message: ""});
  },
  palindromeVerify: function(req, res){
    request('http://localhost:4000/verifyPalindrome/'+req.params.palindrome, function (error, response, body) {
        res.render('index', { title: 'Challenge', status: body.status, message: body.message});
    });
  },
};

module.exports = PalindromeController;
