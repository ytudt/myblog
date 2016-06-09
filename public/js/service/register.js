// 列表服务js
angular.module('register.service', [])
  .factory('registerFty', function($http, $q, GlobalVariable) {
    return {
      doRegister: function(message) {
        // var obj_goodsListData = []
        var deferred = $q.defer();

        //==============================================================
        var url = GlobalVariable.SERVER_PATH + "/showArticle?id=" + parseInt(message)
        $http.get(url).success(function(data, status, headers, config) {
          obj_goodsListData = data;
          console.log(data);
          deferred.resolve(obj_goodsListData);
        })
        return deferred.promise;


      },
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
