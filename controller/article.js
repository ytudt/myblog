/*
* @Author: Administrator
* @Date:   2016-07-04 20:59:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-04 21:17:13
*/

'use strict';

exports.showJavascript=function(req,res,next){
  console.log('javascript');
  console.log(req.session.userInfo);
  res.json(req.session.userInfo);
}