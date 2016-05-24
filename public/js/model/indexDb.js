
angular.module('indexdb', [])
  .factory('indexDbJs', [function() {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    //
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    window.IDBCursor = window.IDBCursor || window.webkitIDBCursor || window.msIDBCursor;
    var db = {
      createDb:function(dbInfo){
        console.log(7878);
        //创建数据库
        var dbContent=window.indexedDB.open(dbInfo.name,dbInfo.version);
        // 判断数据库版本号是否更新
        dbContent.onupgradeneeded=function(){
          console.log(111);
        };
        // 创建数据库成功事件
         dbContent.onsuccess=function(){
           console.log(222);
         },
        // 创建数据库成功事件
         dbContent.onerror=function(){
           console.log(333);
         }
      },
    };
    console.log(db);
    return db ;
  }])
