
// /*
// * @Author: dongtongtong
// * @Date:   2016-05-12 20:33:13
// * @Last Modified by:   dongtongtong
// * @Last Modified time: 2016-05-12 20:54:00


angular.module('myApp', ['ui.router','router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/javascript');
  })

