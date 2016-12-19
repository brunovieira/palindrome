var app = angular.module("app", []);

app.controller("palindromeController", ['$scope','$http', function($scope, $http){
    $scope.name = '';
    $scope.messagePalindrome = '';

    $scope.verifyPalindrome = function() {
      $http.get('/api/verifyPalindrome/'+$scope.name).then(function(data) {
            $scope.messagePalindrome = data.data.message;
        },function(data) {
            $scope.messagePalindrome = data.data.message;
        });
    };
}]);
