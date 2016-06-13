angular.module('nodejs.controller', ['treeControl'])
  .controller('nodejsCtr', ['$scope', function($scope) {
    console.log(1111);
    // $scope.loadData = function() {
    //   console.log('鼠标滑动了')
    // }
    // $scope.ctrlFlavor = "百威";
    // $scope.sayHello = function(name) {
    //   console.log('hello' + name)
    // }
    // $scope.name = 'dt';
    // $scope.age = 18;
    // $scope.changeAge = function(){
    //     $scope.age = 0;
    // }
//    $scope.treeData=[
//    {
//       "id":"1",
//       "pid":"0",
//       "name":"家用电器",
//       "children":[
//          {
//             "id":"4",
//             "pid":"1",
//             "name":"大家电",
//             "children":[
//             {
//               id:10,
//               pid:4,
//               name:'电视',
//               children:[{
//                 id:11,
//               pid:10,
//               name:'海尔',
//               }]
//             },
//             ]
//          },
//          {
//             "id":"5",
//             "pid":"1",
//             "name":"大家电"
//          },
//          {
//             "id":"6",
//             "pid":"1",
//             "name":"大家电"
//          }
//       ]
//    },
//    {
//        "id":"2",
//       "pid":"0",
//       "name":"生活用品",
//       "children":[
//          {
//             "id":"7",
//             "pid":"2",
//             "name":"大家电"
//          },
//           {
//             "id":"8",
//             "pid":"2",
//             "name":"大家电"
//          },
//           {
//             "id":"9",
//             "pid":"2",
//             "name":"大家电"
//          }
//       ]
//    }

// ]
 // $scope.items=[
 // {
 //  id:0,
 //  name:0,
 // },{
 //  id:1,
 //  pid:0,
 //  name:1
 // },
 // {
 //  id:2,
 //  pid:0,
 //  name:2
 // },
 // {
 //  id:3,
 //  pid:0,
 //  name:3
 // },
 // {
 //  id:4,
 //  pid:1,
 //  name:4
 // },
 // {
 //  id:5,
 //  pid:1,
 //  name:5
 // },
 // {
 //  id:6,
 //  pid:4,
 //  name:6
 // },
 // {
 //  id:7,
 //  pid:4,
 //  name:7
 // },
 // {
 //  id:8,
 //  pid:4,
 //  name:8
 // },
 // {
 //  id:9,
 //  pid:6,
 //  name:9
 // },
 // {
 //  id:10,
 //  pid:9,
 //  name:10
 // },
 // {
 //  id:11,
 //  pid:9,
 //  name:11
 // }
 // ]
 //
 // ======================================
//  $scope.treeOptions = {
//     nodeChildren: "children",
//     dirSelectable: true,
//     injectClasses: {
//         ul: "a1",
//         li: "a2",
//         liSelected: "a7",
//         iExpanded: "a3",
//         iCollapsed: "a4",
//         iLeaf: "a5",
//         label: "a6",
//         labelSelected: "a8"
//     }
// }
// $scope.dataForTheTree =
// [
//     { "name" : "Joe", "age" : "21", "children" : [
//         { "name" : "Smith", "age" : "42", "children" : [] },
//         { "name" : "Gary", "age" : "21", "children" : [
//             { "name" : "Jenifer", "age" : "23", "children" : [
//                 { "name" : "Dani", "age" : "32", "children" : [] },
//                 { "name" : "Max", "age" : "34", "children" : [] }
//             ]}
//         ]}
//     ]},
//     { "name" : "Albert", "age" : "33", "children" : [] },
//     { "name" : "Ron", "age" : "29", "children" : [] }
// ];
 var a=localStorage.getItem("a");
 console.log(a);
  }])
