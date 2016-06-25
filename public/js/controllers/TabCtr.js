angular.module('tab.controller', [])
  .controller('TabCtrl', ['$scope', '$log', '$uibModal', function($scope, $log, $uibModal) {
    $scope.receiveMsg = '';



    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));



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
      setTimeout(function() {
        var inputFile = document.getElementById('input_file');
        var result = document.getElementById('result');
        console.log(inputFile);
        inputFile.addEventListener('change', function(e) {
          console.log('变了');
          var file = inputFile.files[0];
          if (file) {
            // 用户选了文件
            // 读取文件内容
            // js读取文件有一个专门对象叫 FileReader;
            // console.log(file)
            var reader = new FileReader();
            // reader.readAsText(file);
            reader.readAsDataURL(file);
            reader.addEventListener('load', function(e) {
              // 我们在事件的回调函数中最想要的数据往往都可以通过e拿到
              // console.log(e.target.result);
              var img = document.createElement('img');
              // img.style.width="300px"
              img.src = this.result;
              console.log(this)
              result.appendChild(img);
            });
            // 没有返回结果怎么办？
            // 为什么没有返回结果？
            // 读取的过程需要花时间
            // JS读取文件完成后会触发一个事件：onload
            // console.log(txt);
          }
        });

      }, 100)



    };

    $scope.toggleAnimation = function() {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };



  }]);


angular.module('tab.controller')
  .controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items) {
    $scope.passwordSame = true;
    $scope.psd = '';
    $scope.repsd = '';
    $scope.ok = function() {
      $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
    $scope.modifyPassword = function() {
      console.log(111);
      if ($scope.psd === $scope.repsd) {
        $scope.passwordSame = true;
      } else {
        $scope.passwordSame = false;
      }
    }
    $scope.file = '';
    $scope.changeAvatar = function() {
      console.log(event);
      console.log($scope.file);
      // var file = event.files[0];
      // console.log(event)
      // console.log(file);

    }
    $scope.$watch(function(){
     if( $scope.psd==''&&$scope.psd==''){
        $scope.passwordSame = true;
      }
      console.log($scope.psd);

    });

  });
