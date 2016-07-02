// /*
// * @Author: dongtongtong
// * @Date:   2016-05-12 20:33:13
// * @Last Modified by:   Administrator
// * @Last Modified time: 2016-06-07 11:06:57


var myApp = angular.module('myApp', ['ui.router', 'router', 'ui.bootstrap', 'indexdb', 'drective.tree', 'config', 'angularFileUpload'])
  .run(function($rootScope) {
    // $rootScope.userInfo = true;
  })
  .config(function($stateProvider, $urlRouterProvider) {

    var a = {
      add: function(a, b) {
        return a + b;
      }
    };
    localStorage.setItem("a", a);
    $urlRouterProvider.otherwise('/tab/javascript');
  })
  .controller('mainController', ['$scope', 'FileUploader', 'GlobalVariable', function($scope, FileUploader, GlobalVariable) {


  }]);
