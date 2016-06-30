angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  var data =[]
  $scope.getLinks = function(){

     Links.getLinks()
       .then(function(data){
           $scope.data  = data;
           data.push(data)
           console.log('z',data)
       })
       .catch(function(err){
           console.error(err);
       })

  };
  $scope.getLinks();
});
