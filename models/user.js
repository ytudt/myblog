'use strict'
const models = require('../db');
const User = models.User;
const Q = require('q');

// 添加一个用户
let newAndSave = function(loginname, passWord, email, callback) {
  let user = new User();
  user.loginname = loginname;
  user.passWord = passWord;
  user.email = email;
  user.save(callback);
};
// q封装版添加用户
exports.qNewAndSave = function(lologinname, passWord, email) {
  var defer = Q.defer();
  newAndSave(lologinname, passWord, email, function(error, data) {
    if (!error) {
      defer.resolve(data);
    } else {

      defer.reject(err);
    }
  });
  return defer.promise;
};

/**
 * 根据登录名查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} loginname 登录名
 * @param {Function} callback 回调函数
 */
let getUserByloginname = function(loginname, callback) {
  User.findOne({ loginname: loginname }, callback);
};
var obj = {
    name: 'dt'
  }
  // 用q封装版根据登录名查找用户
exports.qGetUserByloginname = function(lologinname) {
  var defer = Q.defer();
  getUserByloginname(lologinname, function(error, data) {
    // console.log('第一步的数据'+data)
    // console.log(error)
    if (!error) {
      defer.resolve(data);
    } else {
      defer.reject(err);
    }
  });
  return defer.promise;
};

/**
 * 根据用户ID，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id 用户ID
 * @param {Function} callback 回调函数
 */
exports.getUserById = function(id, callback) {
  if (!id) {
    return callback();
  }
  User.findOne({ _id: id }, callback);
};

/**
 * 根据邮箱，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} email 邮箱地址
 * @param {Function} callback 回调函数
 */
let getUserByMail = function(email, callback) {
  User.findOne({ email: email }, callback);
};
// q封装版
exports.qGetUserByMail = function(email) {
  var defer = Q.defer();
  getUserByMail(email, function(error, data) {
    if (!error) {
      defer.resolve(data);
    } else {
      defer.reject(err);
    }
  });
  return defer.promise;
};
/**
 * 根据用户名更新头像
 * Callback:
 * - err, 数据库异常
 * - lologinname, 用户名
 * - avatar, 头像路径
 * @param {Function} callback 回调函数
 */
exports.setAvatar = function(lologinname,newPath, callback) {
  // console.log(1);
  // console.log(lologinname);
  // console.log(avatar);
  // console.log(data);
  getUserByloginname(lologinname,function(err,data){
    if(err||!data){
      return callback(err);
    }
    data.avatar=newPath;
    console.log('avatar');
    console.log(data);
    data.save(callback)
  })
  // let user = new User();
  // user.loginname = loginname;
  // user.passWord = passWord;
  // user.email = email;
  // User.update({"_id" : data._id},{$set:{"avatar":data.avatar}});
}
