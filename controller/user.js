'use strict'
const path = require('path');
const fs = require('fs');
const User = require('../models').User;
const Tools = require('../common/tools.js');
const Logger = require('../common/logger.js');
const formidable = require('formidable');
var config = require('../config/config');

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
          req.session.userInfo = {
            lologinname,
            passWord
          };
          res.json({
            code: 200,
            msg: 'success',
            avatar: config.avatar
          });
        }
      });

  }
  // 登录
exports.signIn = function(req, res, next) {
  let lologinname = req.body.lologinname || '';
  let passWord = Tools.md5(req.body.passWord || 0);
  User.qGetUserByloginname(lologinname)
    .then(function(data) {
      // console.log(data);
      if (!data) {
        res.json({
          code: -1,
          msg: 'lologinname is notExist'
        });
      } else if (passWord !== data.passWord) {
        res.json({
          code: -2,
          msg: 'passWord is Wrong'
        });
      } else {
        // console.log('登录成功');
        req.session.userInfo = {
          lologinname,
          passWord
        };
        res.json({
          code: 200,
          msg: 'success',
          avatar: data.avatar
        });
      }
    });
}
exports.set = function(req, res, next) {
  console.log('session');
  console.log(req.session.userInfo.lologinname);
  console.log('session');
  // let arr = [];
  // let data = req.body.name || '';
  let lologinname = req.session.userInfo.lologinname

  let form = new formidable.IncomingForm();
  form.uploadDir = './userAvatar';
  form.parse(req, function(err, fields, files) {

    if (err) {
      console.log('cuole');
      return res.json({
        code: '0',
        msg: 'failed'
      });
    }
    let tempPath = files.file.path;
    let extName = path.extname(files.file.name);
    let newPath = tempPath + extName;



    fs.rename(tempPath, newPath, function(err, data) {
      newPath=newPath.replace('userAvatar','.');
       console.log('newPath')
      console.log(newPath);
      User.setAvatar(lologinname, newPath, function(err, data) {
        if (err) {
          return res.json({
            code: -1,
          });
        }
        res.json({
          code: 200,
          avatar: newPath
        });
      });

    });


  });
}
