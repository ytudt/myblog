angular.module('register', ['register.service','indexdb'])
  .controller('registerCtr', ['$scope','indexDbJs', function($scope,indexDbJs) {
    $scope.submit = function() {

      // indexDbJs.createDb({
      //     stname:'ppp'
      // });
      indexDbJs.add('pp',{
        name:'dt',
        age:18
      },function(){
        console.log(111)
      },function(){
        console.log(222)
      })


    }
  }]);
