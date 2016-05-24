angular.module('register', ['register.service','indexdb'])
  .controller('registerCtr', ['$scope','indexDbJs', function($scope,registerFty,indexDbJs) {
    $scope.submit = function() {
      // console.log($scope.repsd);
      indexDbJs.createDb({
          name:'dt',
          version:111
      });
      console.log(indexDbJs);
    }
  }]);
