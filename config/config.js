/*
* @Author: dongtongtong
* @Date:   2016-05-12 19:10:18
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-04 21:34:28
*/

'use strict';

module.exports={
  isDev:true,//是否是开发环境
  ipAdd:'192.168.1.101',
  port:3000,
  db: 'mongodb://127.0.0.1/myblog',
  key:'dt',
  secret:'dt',//session 秘钥
  avatar:'./defaltAvatar.png',//默认头像路径
  sessionTime:1000*60*60*24*14//两周免密码登陆
}
