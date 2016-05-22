angular.module('register', ['register.service'])
  .controller('registerCtr', ['$scope', function($scope,registerFty) {
    console.log($scope.email);
    $scope.submit = function() {
      console.log($scope.email);
      console.log($scope.userName);
      console.log($scope.psd);
      console.log($scope.repsd);
    }

  }]);
