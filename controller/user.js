'use strict'
const User = require('../models').User;
exports.signUp = function(req, res, next) {
  let lologinname = req.body.lologinname || '';
  let passWord = req.body.passWord || 0;
  let email = req.body.email || '';
  // console.log(lologinname + '+' + passWord + '+' + email);
  // res.json({});
  User.getUserByloginname(lologinname, function(error, data) {
    if (data) {
      res.json({
        code: -1,
        msg: 'lologinname is exist'
      });
    } else {
      User.getUserByMail(email, function(error, data) {
        if (data) {
          res.json({
            code: -2,
            msg: 'email is exist'
          });
        } else {
          User.newAndSave(lologinname, passWord, email, function(error, result) {
            if (result) {
              res.json({
                code: 200,
                msg: 'success'
              });
            }
          });
        }
      });
    }

  })


}
exports.signIn=function(req, res, next){
 let lologinname = req.body.lologinname || '';
  let passWord = req.body.passWord || 0;
  console.log(lologinname);
  console.log(passWord);
}
