angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.data = {};
  newLink = "";
  $scope.addLink = function(newLink){
    Links.addLink($scope.data)
      .then(function(data){
          $scope.data[newLink]  = data;
      })
      .catch(function(err){
          console.error(err);
      })
      newLink = "";


  }
});
