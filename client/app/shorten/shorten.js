angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.data = {};

  $scope.addLink = function(newUrl){
    console.log('b',newUrl);
    if(!newUrl.$valid){
      newUrl = "Your url is not valid";

    }else{
    Links.addLink($scope.data)
      .then(function(data){
          $scope.data[newUrl]  = data;
      })
      .catch(function(err){
          console.error(err);
      })
    }
    newUrl = "";


  }
});
