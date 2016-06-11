'use strict'
const models  = require('../db');
const User    = models.User;

// 添加一个用户
exports.newAndSave = function (loginname, pass, email,  callback) {
  let user         = new User();
  user.loginname   = loginname;
  user.pass        = pass;
  user.email       = email;
  user.save(callback);
};

/**
 * 根据登录名查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} loginname 登录名
 * @param {Function} callback 回调函数
 */
exports.getUserByloginname = function (loginname, callback) {
  console.log(loginname+111);
  User.findOne({loginname: loginname}, callback);
};

/**
 * 根据用户ID，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id 用户ID
 * @param {Function} callback 回调函数
 */
exports.getUserById = function (id, callback) {
  if (!id) {
    return callback();
  }
  User.findOne({_id: id}, callback);
};

/**
 * 根据邮箱，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} email 邮箱地址
 * @param {Function} callback 回调函数
 */
exports.getUserByMail = function (email, callback) {
  User.findOne({email: email}, callback);
};


