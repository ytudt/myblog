/*
* @Author: dongtongtong
* @Date:   2016-05-12 20:54:13
* @Last Modified by:   dongtongtong
* @Last Modified time: 2016-05-12 20:57:45
*/

angular.module('route',[])
.config(['$stateProvider','$urlRouterProvider',funcion($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/tab/javascript');

}])
