angular.module('myApp', ['ui.router','router'])
  .config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/tab/javascript');
  })
