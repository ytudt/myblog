'use strict'
const path = require('path');
const fs = require('fs');
const User = require('../models').User;
const Tools = require('../common/tools.js');
const Logger = require('../common/logger.js');
const formidable = require('formidable');

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
  // 登录
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
      } else if (passWord !== data.passWord) {
        res.json({
          code: -2,
          msg: 'passWord is Wrong'
        });
      } else {
        res.json({
          code: 200,
          msg: 'success'
        });
      }
    });
}
exports.set = function(req, res, next) {
  var form = new formidable.IncomingForm();
  // console.log(__dirname);
  form.uploadDir = './userAvatar';
  form.parse(req, function(err, fields, files) {

    if (err) {
      return res.json({
        code: '0',
        msg: 'failed'
      });
    }

    let tempPath = files.file.path;
    let extName = path.extname(files.file.name);
    let newPath = tempPath + extName;

    fs.rename(tempPath, newPath, function(err, data) {
      // console.log(data);

    });

    // let newPath = tmpPath + path.extname(name);

    // fs.rename(tmpPath, newPath, function() {

    //   // 将头像路径更新到数据库中


    //   // 将该图片的请求路径响应给客户端就行了

    //   // /uploads/path.basename(newPath)

    //   gm(newPath)
    //     .resize(100, 100, '!')
    //     .write(newPath, function(err) {
    //       if (err) {
    //         return next(err);
    //       }
    //       let uid = req.session.user.id;
    //       User.updateAvatarById(path.basename(newPath), uid, function(err, result) {
    //         if (err) {
    //           return next(err);
    //         }
    //         if (result.affectedRows > 0) {
    //           res.json({
    //             code: '1',
    //             msg: `/uploads/avatar/${path.basename(newPath)}`
    //           });
    //         }
    //       });
    //     });
    // });
  });


  res.json({
    code: 200
  });
}
