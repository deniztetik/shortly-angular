angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.data = {};

  $scope.addLink = function(newUrl){
    $scope.data = newUrl;
    Links.addLink($scope.data)
      .then(function(data){
          $scope.data[newUrl]  = data;
          console.log(data);
      })
      .catch(function(err){
          console.error(err);
      })
    newUrl = "";
  }
});
