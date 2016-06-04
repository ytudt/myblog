angular.module('nodejs', [])
  .controller('nodejsCtr', ['$scope', function($scope) {
    $scope.loadData = function() {
      console.log('鼠标滑动了')
    }
    $scope.ctrlFlavor = "百威";
    $scope.sayHello = function(name) {
      console.log('hello' + name)
    }
    $scope.name = 'dt';
    $scope.age = 18;
    $scope.changeAge = function(){
        $scope.age = 0;
    }
  }])
