'use strict'
const User = require('../models').User;
const Tools = require('../common/tools.js');
const Logger = require('../common/logger.js');

// 注册
exports.signUp = function(req, res, next) {
  let lologinname = req.body.lologinname || '';
  let passWord = Tools.md5(req.body.passWord || 0);
  Logger.debug(passWord);
  let email = req.body.email || '';
  User.qGetUserByloginname(lologinname)
    .then(function(data) {
      if (data) {
        res.json({
          code: -1,
          msg: 'lologinname is exist'
        });
      } else {
        return User.qGetUserByMail(email)
      }
    })
    .then(function(data) {
      // console.log('第二步的数据' + data)
      if (data) {
        res.json({
          code: -2,
          msg: 'email is exist'
        });
      } else {
        return User.qNewAndSave(lologinname, passWord, email);
      }
    })
    .then(function(data) {
      // console.log('第三步的数据' + data)
      if (data) {
        res.json({
          code: 200,
          msg: 'success'
        });
      }
    });

}

exports.signIn = function(req, res, next) {
  let lologinname = req.body.lologinname || '';
  let passWord = Tools.md5(req.body.passWord || 0);
  console.log(lologinname);
  console.log(passWord);
  User.qGetUserByloginname(lologinname)
    .then(function(data) {
      if (!data) {
        res.json({
          code: -1,
          msg: 'lologinname is notExist'
        });
      } else if(passWord!==data.passWord){
        res.json({
          code: -2,
          msg: 'passWord is Wrong'
        });
      }else{
         res.json({
          code: 200,
          msg: 'success'
        });
      }
    })
}
