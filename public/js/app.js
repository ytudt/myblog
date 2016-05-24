
// /*
// * @Author: dongtongtong
// * @Date:   2016-05-12 20:33:13
// * @Last Modified by:   dongtongtong
// * @Last Modified time: 2016-05-17 10:15:26


angular.module('myApp', ['ui.router','router','ui.bootstrap','demo','indexdb'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/javascript');
  })

