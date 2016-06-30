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

  }
  $scope.getLinks();
})
.directive('showLink', function(){
  return{
    restrict:'EA',
    templateUrl:'app/links/my_link.html',
    replace:true,
    scope:{
      source:'='
    },
    link:function(scope,ele,attr){
      console.log('here on the directive')
    }
  }
})
