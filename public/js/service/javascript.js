/*
 * @Author: Administrator
 * @Date:   2016-07-04 20:46:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-04 21:17:58
 */

'use strict';
angular.module('javascript.service', [])
    .factory('javascriptService', ['$http', '$q', 'GlobalVariable', function($http, $q, GlobalVariable) {
        var factory = {};
        factory.showHome = function() {
            var deferred = $q.defer();
            var url = GlobalVariable.SERVEI_PATH + "/javascript";
            $http.get(url).success(function(data, status, headers, config) {
                deferred.resolve(data);
            });
            return deferred.promise;

        };


        return factory;
    }]);
