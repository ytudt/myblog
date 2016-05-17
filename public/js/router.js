angular.module('router',[])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
        .state("tab", {
            url: "/tab",
            templateUrl: "template/tab.html"
        })
        .state("tab.javascript", {
            url:"/javascript",
            templateUrl: "template/javascript.html"
        })
        .state("tab.angular", {
            url:"/angular",
            templateUrl: "template/angular.html",
            controller: 'ModalDemoCtrl'
        })
        .state("tab.nodejs", {
            url:"/nodejs",
            templateUrl: "template/nodejs.html"
        })
          .state("tab.register", {
            url: "/register",
            templateUrl: "template/register.html"
        })
            .state("tab.login", {
            url: "/login",
            templateUrl: "template/login.html"
        })
})
