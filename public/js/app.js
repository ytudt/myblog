
// /*
// * @Author: dongtongtong
// * @Date:   2016-05-12 20:33:13
// * @Last Modified by:   Administrator
// * @Last Modified time: 2016-05-29 20:25:16


angular.module('myApp', ['ui.router','router','ui.bootstrap','demo','indexdb'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/register');
  })

