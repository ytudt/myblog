angular.module('indexdb', [])
    .factory('indexDbJs', [function() {

        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
        window.IDBCursor = window.IDBCursor || window.webkitIDBCursor || window.msIDBCursor;
        var db = {
            dbName: 'macImDb',
            obj: {},
            dbInstance: {},
            errorHandler: function(error) {
                console.log('error: ' + error.target.error.message);
            },
            // 打开数据库，没有则自动创建
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
            // 关闭数据库
            closeDB: function(db) {
                db.close();
            },
            // 创建数据表
            createStore: function(storeInfo, indexInfo, callback) {

                db.obj.stname = storeInfo.stname;
                db.obj.indexInfo = indexInfo;
                //创建数据库
                var version = db.getdbVeision();
                // console.log(version);
                // var req = window.indexedDB.open(db.dbName);
                // req.onsuccess = function(e) {
                // var version = e.target.result.version;
                var dbContent = window.indexedDB.open(db.dbName, version);
                // console.log(dbContent.getVesdion)
                // 判断数据库版本号是否更新``
                // dbContent.onupgradeneeded = db.upgrade;
                dbContent.onupgradeneeded = function(e) {
                        console.log('更新了');
                        var _db = e.target.result,
                            names = _db.objectStoreNames;
                        // 此处可以创建多个表
                        var name = db.obj.stname;
                        // console.log(db.obj.stname);
                        // console.log(name);
                        if (!names.contains(name)) {
                            var store = _db.createObjectStore(
                                db.obj.stname, {
                                    keyPath: 'id',
                                    autoIncrement: true
                                });
                            // 如果创建数据表时传过来的索引信息不为空则创建索引
                            if (db.obj.indexInfo && db.obj.indexInfo.length !== 0) {
                                for (var i = 0; i < db.obj.indexInfo.length; i++) {
                                    store.createIndex(db.obj.indexInfo[i].indexName, db.obj.indexInfo[i].index, { unique: false });
                                }
                            }

                        } else {
                            callback(false);
                            // db.closeDB('macImDb');
                        }
                    },
                    // 创建数据库成功事件
                    dbContent.onsuccess = function(e) {
                        db.dbInstance = dbContent.result;
                        callback(true);

                        // db.closeDB('macImDb');
                        // db.dbInstance.onerror = null;
                        // console.log(db);
                    },
                    // 创建数据库成功事件
                    dbContent.onerror = function() {
                        callback(false);
                        // db.closeDB('macImDb');
                        console.log(333);
                    }
                    // }

            },
            CreateStores: function(storeInfo, indexInfo, callback) {
                // db.obj.stname = storeInfo.stname;
                db.obj.indexInfo = indexInfo;
                var count = 0;
                //创建数据库
                var version = db.getdbVeision();
                // console.log(version);
                // var req = window.indexedDB.open(db.dbName);
                // req.onsuccess = function(e) {
                // var version = e.target.result.version;
                var dbContent = window.indexedDB.open(db.dbName, version);
                // console.log(dbContent.getVesdion)
                // 判断数据库版本号是否更新``
                // dbContent.onupgradeneeded = db.upgrade;
                dbContent.onupgradeneeded = function(e) {
                        console.log('更新了');
                        var _db = e.target.result,
                            names = _db.objectStoreNames;
                        // 此处可以创建多个表
                        // var arr = ['dtt1', 'dttt2', 'dttt3'];
                        for (var i = 0; i < storeInfo.length; i++) {
                            var name = storeInfo[i].stname;
                            if (!names.contains(name)) {
                                var store = _db.createObjectStore(
                                    name, {
                                        keyPath: 'id',
                                        autoIncrement: true
                                    });
                                // 如果创建数据表时传过来的索引信息不为空则创建索引
                                if (db.obj.indexInfo[i] && db.obj.indexInfo[i].length !== 0) {
                                    for (var j = 0; j < db.obj.indexInfo[i].length; j++) {
                                        store.createIndex(db.obj.indexInfo[i][j].indexName, db.obj.indexInfo[i][j].index, { unique: false });
                                    }
                                    count++;

                                }

                            } else {
                                // callback(true);
                                // db.closeDB('macImDb');
                            }
                        }
                        if (count >= storeInfo.length) {
                            callback(true);
                        }


                    },
                    // 创建数据库成功事件
                    dbContent.onsuccess = function(e) {
                        db.dbInstance = dbContent.result;
                        callback(true);

                        // db.closeDB('macImDb');
                        // db.dbInstance.onerror = null;
                        // console.log(db);
                    },
                    // 创建数据库成功事件
                    dbContent.onerror = function() {
                        callback(false);
                        // db.closeDB('macImDb');
                        console.log(333);
                    }
                    // }


            },
            // 获得数据表
            getObjectStore: function(objectStoreName, mode) {
                var txn, store;
                mode = mode || 'readonly';
                txn = db.dbInstance.transaction([objectStoreName], mode);
                // console.log(txn);
                store = txn.objectStore(objectStoreName);
                return store;
            },
            // 当数据库版本更新时创建数据表
            upgrade: function(e) {
                console.log('更新了');
                var _db = e.target.result,
                    names = _db.objectStoreNames;
                // 此处可以创建多个表
                var name = db.obj.stname;
                // console.log(db.obj.stname);
                // console.log(name);
                if (!names.contains(name)) {
                    var store = _db.createObjectStore(
                        db.obj.stname, {
                            keyPath: 'id',
                            autoIncrement: true
                        });
                    // 如果创建数据表时传过来的索引信息不为空则创建索引
                    if (db.obj.indexInfo && db.obj.indexInfo.length !== 0) {
                        for (var i = 0; i < db.obj.indexInfo.length; i++) {
                            store.createIndex(db.obj.indexInfo[i].indexName, db.obj.indexInfo[i].index, { unique: false });
                        }
                    }

                }
            },
            // 添加数据（发现没有表则创建表）
            // add: function(objectStoreName,indexInfo, data,  callback) {
            //     db.createStore({ stname: objectStoreName }, indexInfo, function(result) {
            //         if (result === true) {
            //             // 如果此处是数组在此函数内部循环，而不是循环调用add函数是否会快点。
            //             db.open(function() {
            //                 var store, req, mode = 'readwrite';
            //                 var addNum = 0;
            //                 store = db.getObjectStore(objectStoreName, mode);
            //                 console.log(store);
            //                 for (var i = 0; i < data.length; i++) {
            //                     var req = store.add(data[i]);
            //                     req.onsuccess = function() {
            //                         addNum++;
            //                         if (addNum >= data.length) {
            //                             callback(true);
            //                         }
            //                     };
            //                     req.onerror = function() {
            //                         callback(false);
            //                     };
            //                 }
            //                 //     req = store.add(data);
            //                 // req.onsuccess = function() {
            //                 //     console.log('add');
            //                 // };
            //                 // req.onerror = fail;
            //             });
            //         }
            //     });
            // },
            // 添加数据（发现没有表则创建表)
            add: function(type, userId, objectStoreName, indexInfo, data, callback) {
                if (type !== null) {
                    objectStoreName = type + userId;
                }
                db.createStore({ stname: objectStoreName }, indexInfo, function(result) {
                    if (result === true) {
                        // 如果此处是数组在此函数内部循环，而不是循环调用add函数是否会快点。
                        db.open(function() {
                            var store, req, mode = 'readwrite';
                            var addNum = 0;
                            store = db.getObjectStore(objectStoreName, mode);
                            for (var i = 0; i < data.length; i++) {
                                var req = store.add(data[i]);
                                req.onsuccess = function() {
                                    addNum++;
                                    if (addNum >= data.length) {
                                        callback(true);
                                    }
                                };
                                req.onerror = function() {
                                    callback(false);
                                };
                            }
                            //     req = store.add(data);
                            // req.onsuccess = function() {
                            //     console.log('add');
                            // };
                            // req.onerror = fail;
                        });
                    }
                });
            },

            // add: function(objectStoreName, indexInfo, data, callback) {
            //     db.createStore({ stname: objectStoreName }, indexInfo, function(result) {
            //         if (result === true) {
            //             // 如果此处是数组在此函数内部循环，而不是循环调用add函数是否会快点。
            //             db.open(function() {
            //                 var store, req, mode = 'readwrite';
            //                 var addNum = 0;
            //                 store = db.getObjectStore(objectStoreName, mode);
            //                 for (var i = 0; i < data.length; i++) {
            //                     var req = store.add(data[i]);
            //                     req.onsuccess = function() {
            //                         addNum++;
            //                         if (addNum >= data.length) {
            //                             callback(true);
            //                         }
            //                     };
            //                     req.onerror = function() {
            //                         callback(false);
            //                     };
            //                 }
            //                 //     req = store.add(data);
            //                 // req.onsuccess = function() {
            //                 //     console.log('add');
            //                 // };
            //                 // req.onerror = fail;
            //             });
            //         }
            //     });
            // },

            //更新数据表
            update: function(objectStoreName, data, callback) {
                db.open(function() {
                    var store, req, mode = 'readwrite';
                    var updateNum = 0;
                    store = db.getObjectStore(objectStoreName, mode);
                    for (var i = 0; i < data.length; i++) {
                        var req = store.put(data[i]);
                        req.onsuccess = function() {
                                updateNum++;
                                if (updateNum >= data.length) {
                                    callback(true);
                                }
                            },
                            req.onerror = function() {
                                callback(false);
                            }
                    };
                    // }
                    // req = store.put(data);
                    // req.onsuccess = success;
                    // req.onerror = fail;
                });
            },
            selectDataById: function(objectStoreName, id, callback) {
                db.open(function() {
                    var store = db.getObjectStore(objectStoreName),
                        req = store.get(id);
                    req.onsuccess = function(e) {
                        if (!e.target.result) {
                            return callback(null);
                        }
                        callback(e.target.result);

                        // console.log(e.target.result);

                    };
                    req.onerror = function() {
                        callback(false);
                    };
                });

            },
            // 通过自己创建的索引查找数据(不加游标)
            // selectDataByIndex: function(objectStoreName, indexName, data) {
            //     db.open(function() {
            //         var store = db.getObjectStore(objectStoreName);
            //             var index = store.index(indexName);
            //         var result = [];
            //         for (var i = 0; i < data.length; i++) {
            //             index.get(data[i]).onsuccess = function(e) {
            //                 result.push(e.target.result);
            //                 console.log(result);

            //             }
            //         }
            //         console.log(11);
            //     });

            // },
            //  通过自己创建的索引查找数据(增加游标)
            // selectDataByIndex: function(objectStoreName, indexName, searchData, callback) {
            //     db.open(function() {
            //         var store = db.getObjectStore(objectStoreName);
            //         var index = store.index(indexName);
            //         var data = [];
            //         var request = index.openCursor(IDBKeyRange.only(searchData))
            //         request.onsuccess = function(e) {
            //             var cursor = e.target.result;
            //             if (cursor) {
            //                 var result = cursor.value;
            //                 data.push(result);
            //                 // console.log(data);
            //                 if(result&&result!==null){

            //                    cursor.continue();
            //                  }else{

            //                  }
            //                 // console.log(result);
            //             }else {
            //                 callback(data);
            //             }
            //         },
            //         request.onerror = callback(false);

            //     });

            // },
            // 通过自己创建的索引查找数据(增加游标)
            selectDataByIndex: function(objectStoreName, indexName, searchData, callback) {
                db.open(function() {
                    var store = db.getObjectStore(objectStoreName);
                    var index = store.index(indexName);
                    var data = [];
                    var cursor = index.openCursor(IDBKeyRange.only(searchData));
                    cursor.onsuccess = function(e) {
                            if (e.target.result) {
                                var result = e.target.result.value;
                                // var result = result.value;
                                // console.log(result);
                                data.push(result);
                                // console.log(data);
                                if (result && result !== null) {
                                    e.target.result.continue();
                                } else {

                                }
                                // console.log(result);
                            } else {
                                callback(data);
                            }
                        },
                        cursor.onerror = function() {
                            callback(false);
                        };

                });

            },
            // 根据id范围获取数据
            selectDataByIdRange: function(objectStoreName, indexName, startId, endId, callback) {
                db.open(function() {
                    var store = db.getObjectStore(objectStoreName);
                    var index = store.index(indexName);
                    var boundKeyRange = IDBKeyRange.bound(startId, endId, false, true);
                    var data = [];
                    // req = store.get(id);
                    index.openCursor(boundKeyRange).onsuccess = function(event) {
                        var cursor = event.target.result;
                        if (cursor) {
                            // Do something with the matches.
                            // console.log(cursor.value);
                            data.push(cursor.value);
                            cursor.continue();
                        } else {
                            callback(data);
                        }

                    }
                });
            },
            // 获得一个数据表的所有数据
            selectAll: function(objectStoreName, callback) {

                db.open(function() {
                    var
                        store = db.getObjectStore(objectStoreName),
                        cursor = store.openCursor(),
                        data = [];

                    cursor.onsuccess = function(e) {
                        var result = e.target.result;
                        if (result && result !== null) {
                            data.push(result.value);
                            result.continue();
                            // callback(data);
                        } else {

                            callback(data);

                        }

                    };
                    cursor.onerror = function() {
                        callback(false);
                    };

                });
            },
            // 清空某个数据表
            // deleteAllDate: function(dbName,objectStoreName) {
            //   var version=db.getdbVeision()
            //   db.open(dbName);
            // },
            // 删除某个数据表
            // deleteStore: function(objectStoreName) {
            //     db.open(function() {
            //         // if (db.objectStoreNames.contains(objectStoreName)) {
            //         db.deleteObjectStore(objectStoreName);
            //         // }
            //     });

            // },
            deleteAllStore: function(objectStoreName, success, fail) {

            },
            // 删除某个数据库
            // deleteDB(dbName) {
            //     indexedDB.deleteDatabase(dbName);
            // },
            // 获得数据库当前版本
            getdbVeision: function() {
                // var dbVersion = parseInt(localStorage.getItem("dbVersion")) || 1;
                // dbVersion++;
                // localStorage.setItem("dbVersion", dbVersion);
                return +new Date();
            }
        };
        return db;
    }]);
