// 列表服务js
angular.module('register.service', [])
  .factory('registerFty', function($http, $q, GlobalVariable) {
    // console.log(GlobalVariable.SERVEI_PATH);
    return {
      doRegister: function(message) {
        console.log(message);
        var deferred = $q.defer();
        var url = GlobalVariable.SERVEI_PATH + "/doRegister";
        console.log(url);
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
          deferred.resolve(obj_goodsListData);
        }).error(function(data) {
            deferred.resolve(data);
        });
        // $http.post("http://127.0.0.1:3000/doRegister");
        return deferred.promise;
      }



      // 测试service中变量变化controller做出反应
      // test(scope) {
      //   scope.a = 1;
      //      setInterval(function() {
      //       // a++;/
      //     scope.a++;
      //     scope.$apply();
      //     console.log(scope.a);
      //   }, 5000);
      //   return scope.a;
      // }

    };
  });
