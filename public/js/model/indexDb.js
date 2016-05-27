angular.module('indexdb', [])
  .factory('indexDbJs', [function() {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    window.IDBCursor = window.IDBCursor || window.webkitIDBCursor || window.msIDBCursor;
    var db = {
      dbName: 'nodedb',
      obj: {},
      dbInstance: {},
      errorHandler: function(error) {
        console.log('error: ' + error.target.error.message);
      },

      open: function(func, fail) {
        var dbContent = window.indexedDB.open(db.dbName);
        dbContent.onupgradeneeded = db.upgrade;
        dbContent.onerror = db.errorHandler;
        dbContent.onsuccess = function(e) {
          db.dbInstance = dbContent.result;
          db.dbInstance.onerror = fail;
          func();
        };
      },
      // createDb: function(dbInfo) {
      //   db.obj.stname = dbInfo.stname;
      //   //创建数据库
      //   var req = window.indexedDB.open(db.dbName);
      //   req.onsuccess = function(e) {
      //     var version = e.target.result.version;
      //     var dbContent = window.indexedDB.open(db.dbName, ++version);
      //     // console.log(dbContent.getVesdion)
      //     // 判断数据库版本号是否更新``
      //     dbContent.onupgradeneeded = db.upgrade;
      //     // 创建数据库成功事件
      //     dbContent.onsuccess = function(e) {
      //         db.dbInstance = dbContent.result;
      //         // db.dbInstance.onerror = null;
      //         console.log(db);
      //       },
      //       // 创建数据库成功事件
      //       dbContent.onerror = function() {
      //         console.log(333);
      //       }
      //   }

      // },
      getObjectStore: function(objectStoreName, mode) {
        var txn, store;
        mode = mode || 'readonly';
        txn = db.dbInstance.transaction([objectStoreName], mode);
        store = txn.objectStore(objectStoreName);
        return store;
      },
      upgrade: function(e) {
        var _db = e.target.result,
          names = _db.objectStoreNames;
        // 此处可以创建多个表
        var name = db.obj.stname;
        // console.log(db.obj.stname);
        // console.log(name);
        if (!names.contains(name)) {
          _db.createObjectStore(
            db.obj.stname, {
              keyPath: 'id',
              autoIncrement: true
            });
        }
      },
      add: function(objectStoreName, data, success, fail) {
        db.open(function() {
          var store, req, mode = 'readwrite';
          store = db.getObjectStore(objectStoreName, mode),
            req = store.add(data);
          req.onsuccess = success;
          req.onerror = fail;
        }, fail);
      }
    };
    return db;
  }])
