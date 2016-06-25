angular.module('router',['registe.controller','nodejs.controller','login.controller','tab.controller'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
        .state("tab", {
            url: "/tab",
            templateUrl: "template/tab.html",
            controller:'TabCtrl'
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
            templateUrl: "template/nodejs.html",
             controller: 'nodejsCtr'
        })
          .state("tab.register", {
            url: "/register",
            templateUrl: "template/register.html",
             controller:"registerCtr"
        })
            .state("tab.login", {
            url: "/login",
            templateUrl: "template/login.html",
              controller:"loginCtr"

        })
})
