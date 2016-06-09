angular.module('register', ['register.service', 'indexdb'])
  .controller('registerCtr', ['$scope', 'indexDbJs', 'registerFty', function($scope, indexDbJs, registerFty) {

    // 验证两次密码是否一致
    $scope.confirPassword = function() {
      if ($scope.psd === $scope.repsd) {
        $scope.passwordSame = true;
      } else {
        $scope.passwordSame = false;
      }
    }
    $scope.save = function() {


        //==============数据库调用demo=======================
        //1.创建表indexDbJs.createStore(storeInfo, indeInfo, callback)
        // indexDbJs.createStore({ stname: 'add1' }, [{ indexName: 'f_userName', index: 'userName' }, { indexName: 'f_id', index: 'id' }], function(data) {
        //         console.log(data);
        //     })
        //2.往某个表添加数据indexDbJs.add(objectStoreName, data, callback)
        // indexDbJs.add('addressstorex2111',[], [
        // {
        //      userName:'dt',
        //      age:18
        // }, {
        //      userName:'dt1',
        //      age:19
        // }, {
        //      userName:'张三',
        //      age:20
        // }, {
        //      userName:'张三',
        //      age:21
        // }, {
        //      userName:'张三',
        //      age:22
        // },
        //      ]
        //   , function(data){
        //      console.log(data);
        // })
        // 3.更新某个表的数据indexDbJs.update(objectStoreName, data, callback)
        // indexDbJs.update('addressstore', [
        // {
        //     id:1,
        //     userName:"李四"

        // },{
        //     id:2,
        //     userName:"王五"

        // }
        //     ], function(data){
        //           console.log(data);
        //     })
        //
        // 4.通过id查询某条数据indexDbJs.selectDataById(objectStoreName, id, callback)
        // indexDbJs.selectDataById('addressstore', 1, function(data){
        //     console.log(data);
        // })
        // 5.通过其他索引查询数据indexDbJs.selectDataByIndex(objectStoreName, indexName, searchData, callback)
        // indexDbJs.selectDataByIndex('addressstore','f_userName','张三',function(data){
        //       console.log(data);
        // })
        //6.查询某个库的所有数据indexDbJs.selectAll(objectStoreName, callback);
        // indexDbJs.selectAll('addressstore2', function(data){
        //       console.log(data);
        // })
        ////7.根据id范围获取数据indexDbJs.selectDataByIdRange(objectStoreName,indexName, startId, endId,callback);
        // indexDbJs.selectDataByIdRange('addressstorex','f_id',80,100,function(data){
        //       console.log(data);
        // });
        //
        // indexDbJs.CreateStores([{
        //     stname:5
        // },{
        //     stname:6
        // },{
        //     stname:7
        // },{
        //     stname:8
        // }],[[],[],[],[]], function(data) {
        //     console.log(data);

        // });

      }
      // indexDbJs.createStore({ stname: 'aaab' }, [{ indexName: 'f_userName', index: 'userName' }, { indexName: 'f_id', index: 'id' }], function(data) {
      //     console.log(data);
      // })
      // indexDbJs.add(null,null,'mmm',[],[{name:'dt'}],function(result){
      //     console.log(result);
      // });
      // console.log(registerFty.test($scope));
      // console.log($scope.a);
      // 测试service中变量变化controller做出反应
      // $scope.$watch('a',function(){
      //   console.log(222);
      // });
      // console.log( indexDbJs.getdbVeision());
  }]);
