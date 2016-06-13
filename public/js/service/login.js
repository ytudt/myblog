// 列表服务js
angular.module('login.service', [])
  .factory('loginFty', function($http, $q, GlobalVariable) {
    // console.log(GlobalVariable.SERVEI_PATH);
    return {
      doLogin: function(message) {
        console.log(message);
        var deferred = $q.defer();
        var url = GlobalVariable.SERVEI_PATH + "/doLogin";
        var req = {
          method: 'POST',
          url: url,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*'
          },
          data: message //message 必须是a=b&c=d的格式
        };
        $http(req).success(function(data) {
          console.log(data);
          obj_goodsListData = data;
          deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
      }

    };
  });
