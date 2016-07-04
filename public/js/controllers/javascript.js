/*
 * @Author: Administrator
 * @Date:   2016-07-04 20:43:28
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-04 21:22:22
 */

'use strict';
angular.module('javascript.controller', ['javascript.service'])
    .controller('javascriptCtr', ['$rootScope', '$scope', 'javascriptService', function($rootScope, $scope, javascriptService) {
        console.log(111);
        javascriptService.showHome()
        var promise = javascriptService.showHome();
        promise.then(function(date) {
            console.log(date);
            if (date) {
                $rootScope.userInfo = {
                    userName: date.lologinname,
                    avatar: date.avatar
                };
            }

        });
    }]);
