/*
 * @Author: dongtongtong
 * @Date:   2016-05-17 10:02:35
 * @Last Modified by:   dongtongtong
 * @Last Modified time: 2016-05-17 11:46:39
 */

angular.module('demo', []).controller('ModalDemoCtrl', function($scope,$log, $uibModal) {
  $scope.items = ['item1', 'item2', 'item3'];
  $scope.animationsEnabled = true;
  $scope.open = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function() {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $scope.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

angular.module('demo').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
