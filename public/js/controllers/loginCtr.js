angular.module('login.controller', ['login.service', 'indexdb'])
  .controller('loginCtr', ['$scope', '$state', 'indexDbJs',
    'loginFty',
    function($scope, $state, indexDbJs, loginFty) {
      console.log(111)
      $scope.login = function() {
        var message = 'lologinname=' + $scope.userName + '&passWord=' + $scope.psd ;
        var promise = loginFty.doLogin(message);
        promise.then(function(data) {
            switch (data.code) {
              case 200:
              $rootScope.userInfo={
                userName:$scope.userName
              };
                $state.go('tab.javascript');
                break;
              case -1:
                $scope.receiveMsg = true;
                $scope.registerMsg = '用户名不存在';
                break;
              case -2:
                $scope.receiveMsg = true;
                $scope.registerMsg = '密码错误';
                break;
            }
          }, function(data) {
            $scope.receiveMsg = true;
            $scope.registerMsg = '注册失败';
          })
          .finally(function(data) {

          });
      }
    }
  ]);
