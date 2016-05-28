angular.module('register', ['register.service', 'indexdb'])
    .controller('registerCtr', ['$scope', 'indexDbJs', function($scope, indexDbJs) {
        $scope.submit = function() {
            // console.log('submit');
            //   indexDbJs.createDb({
            //       stname:'pppp'
            //   });
            // indexDbJs.add('ppp',{
            //   name:'dt',
            //   age:18
            // },function(){
            //   console.log(111)
            // },function(){
            //   console.log(222)
            // })
            // for(var i=0;i<100;i++){
            //   indexDbJs.update('pppp',{
            //     id:i,
            //     name:i,
            //     age:i,
            //     sex:'男',
            //     kemu:'英语',
            //     xinghao:'戴尔1'
            //   })
            // }
            // indexDbJs.deleteAllDate('pppp');
            // indexDbJs.getAll('pppp');
            // var data = [];
            // for (var i = 0; i < 10000; i++) {
            //     data.push({
            //             name: i,
            //             age: i,
            //             sex: '男',
            //             kemu: '英语',
            //             xinghao: '戴尔1'
            //         }

            //     );
            // }
            // indexDbJs. add('pppp',data);
            // indexDbJs.createStore({
            //     stname: 'dt2'
            // }, [{
            //     indexName: '_indexName',
            //     index: 'index'
            // }, {
            //     indexName: '_indexName2',
            //     index: 'index2'
            // }]);
            // indexDbJs.getAll('pppp');
            // indexDbJs.add('dt2', [{
            //     _indexName: 1,
            //     index2: '张三',
            //     name: 'dt'
            // }, {
            //     _indexName: 2,
            //     index2: '李四',
            //     name: 'dtt'
            // }, {
            //     _indexName: 3,
            //     index2: '王五',
            //     name: 'dttt'
            // }])
            // indexDbJs.selectDataByIndex('dt2','_indexName2','王五',function(data){
            //   console.log(data);
            // });
            // indexDbJs.createStore({
            //     stname: 'dt6'
            // }, [{
            //     indexName: '_indexName',
            //     index: 'index'
            // }, {
            //     indexName: '_indexName2',
            //     index: 'index2'
            // }]
            // )
            // var data = [];
            // for (var i = 0; i < 100; i++) {
            //     data.push({
            //             id: i,
            //             name: i,
            //             age: 1,
            //             sex: '男',
            //             kemu: '英语',
            //             xinghao: '戴尔1'
            //         }

            //     );
            // }
            // indexDbJs.update('dt2', data, function(data) {
            //     console.log(data);
            // })
            console.log('wancheng');
            // indexDbJs.getAll('dt2',function(data){
            //   console.log(data);
            // });
            // indexDbJs.deleteStore('dt3');
            indexDbJs.deleteDB('nodedb');



        }
    }]);
