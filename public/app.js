angular.module('project', ['ngRoute'])
.config(function($routeProvider) {
  var resolveProjects = {
    projects: function (Projects) {
      return Projects.fetch();
    }
  };
  $routeProvider
    .when('/', {
      controller:'PalindromeController as palindromeController',
      templateUrl:'index.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});
