
// /*
// * @Author: dongtongtong
// * @Date:   2016-05-12 20:33:13
// * @Last Modified by:   Administrator
// * @Last Modified time: 2016-06-07 11:06:57


angular.module('myApp', ['ui.router','router','ui.bootstrap','demo','indexdb','drective.tree','config'])
  .config(function($stateProvider, $urlRouterProvider) {
    var a={
      add:function(a,b){
        return a+b;
      }
    };
     localStorage.setItem("a",a);
    $urlRouterProvider.otherwise('/tab/register');
  })

