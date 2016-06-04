/*
 * @Author: Administrator
 * @Date:   2016-06-01 20:55:13
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-06-02 16:09:12
 */

'use strict';
angular.module('drective.tree', [])
  // 1.最简单的指令
  .directive('helloWord', function() {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: '../template/directive/hello.html'
    };
  })
  // 2.指令调用controller的方法
  .directive('loadData', function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attr) {
        element.bind('mouseenter', function() {
          // loadData是controller里面的一个函数，鼠标进入(两种调用方式)
          // scope.loadData();
          // scope.$apply('loadData()');
          // 如果想在不同的控制器调用不同的方法需要给指令加个属性 属性值为方法名，用attr获得方法名
          // (注意html里如果为驼峰命名法，这里也要改成小写字母)
          scope.$apply(attr.howtoload);
        });

      }
    };
  })
  // 3.指令间数据通信
  .directive('superMan', function() {
    return {
      scope: {},
      restrict: 'AE',
      //指令内部controller和mvc的controller不一样，此处用于给指令暴露一些公用方法。
      //给外部调用时用controller
      controller: function($scope) {
        $scope.ablities = [];
        this.addStrength = function() {
          $scope.ablities.push('strength');
        };
        this.addSpeed = function() {
          $scope.ablities.push('speed');
        };
        this.addLight = function() {
          $scope.ablities.push('light');
        };
      },
      // 此指令内部使用用link
      link: function(scope, element, attr) {
        element.addClass('btn btn-primary');
        element.bind('mouseenter', function() {
          console.log(scope.ablities);
        });
      }
    }
  })
  .directive('strength', function() {
    return {
      restrict: 'AE',
      // require表示这个指令依赖superMan
      require: '^superMan',
      link: function(scope, element, attr, supermanCtrl) {
        supermanCtrl.addStrength();
      }
    }
  })
  .directive('speed', function() {
    return {
      restrict: 'AE',
      require: '^superMan',
      link: function(scope, element, attr, supermanCtrl) {
        supermanCtrl.addSpeed();
      }
    }
  })
  .directive('light', function() {
    return {
      restrict: 'AE',
      require: '^superMan',
      link: function(scope, element, attr, supermanCtrl) {
        supermanCtrl.addLight();
      }
    }
  })
  // 4.独立scope
  .directive('hello', function() {
    return {
      restrict: 'AE',
      //scope让调用相同的指令时不互相影响，独立开
      scope: {},
      replace: true,
      template: '<div><input type="text" ng-model="userName">{{userName}}</div>'

    }
  })
  // scope默认为false 此时指令作用域和controller作用域完全一样，双方改另一个也改。
   .directive('scopeFlase', function() {
    return {
      restrict: 'AE',
      //scope让调用相同的指令时不互相影响，独立开
      scope: false,
      replace: true,
      template: '<input type="text" ng-model="name">',
  }
})
   // scope为true时指令的是个新作用域，指令改controller不改。controller改指令也改。
  .directive('scopeTrue', function() {
    return {
      restrict: 'AE',
      //scope让调用相同的指令时不互相影响，独立开
      scope: true,
      replace: true,
      template: '<input type="text" ng-model="age">',
  }
})
  // 5.绑定方式
  //  .directive('drink', function() {
  //   return {
  //     restrict: 'AE',
  //     //scope让调用相同的指令时不互相影响，独立开
  //     scope: {},
  //     replace: true,
  //     template: '<div>{{flavor}}</div>',
  //     link:function(scope, element, attr){
  //           scope.flavor=attr.flavor;
  //     }

//   }
// })
// '@'绑定（传递字符串）
//  .directive('drink', function() {
//   return {
//     restrict: 'AE',
//     //scope让调用相同的指令时不互相影响，独立开
//     scope: {
//       flavor:'@'
//     },
//     replace: true,
//     template: '<div>{{flavor}}</div>',
//   }
// })
// '='绑定（控制器和指令双向绑定）
// .directive('drink', function() {
//   return {
//     restrict: 'AE',
//      scope: {
//       flavor: '='
//     },
//     // replace: true,
//     template: '<input type="text" ng-model="flavor"/>'
//   }
// })
// '&'绑定 更方便的调用controller里得到方法,传递一个来自父作用域的函数
// .directive('greeting', function() {
//   return {
//     restrict: 'AE',
//      scope: {
//       greet: '&'
//     },
//     // replace: true,
//     template: '<input type="text" ng-model="userName"/>'
//     +'<button class="btn btn-default" ng-click="greet({name:userName})">greet</button>'
//   }
// })
//
// 注意：绑定时命名规则 @ = &引用的命名规则
 .directive("myDirective", function () {
    var obj = {
        restrict: "AE",
        scope: {
            // 这里要用驼峰命名法，html里用小写加-的形式
            name: '@myName',
            age: '=',
            changeAge: '&changeMyAge'
        },
        replace: true,
        template: "<div class='my-directive'>" +
            "<h3>下面部分是我们创建的指令生成的</h3>" +
            "我的名字是：<span ng-bind='name'></span><br/>" +
            "我的年龄是：<span ng-bind='age'></span><br/>" +
            "在这里修改名字：<input type='text' ng-model='name'><br/>" +
            "<button ng-click='changeAge()'>修改年龄</button>" +
            " </div>"
    }
    return obj;
});
