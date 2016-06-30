angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
     Links.getLinks($scope.user)
       .then(function(data){
           $scope.data.links  = data;
           console.log('z',data)
       })
       .catch(function(err){
           console.error(err);
       })

  };
  $scope.getLinks();
});
