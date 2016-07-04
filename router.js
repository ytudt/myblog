/*
* @Author: dongtongtong
* @Date:   2016-05-12 19:39:16
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-04 21:04:24
*/

'use strict';
// const express=require('express');

// const router=express.Router();
const express = require('express');

const router = express.Router();

const indexController=require('./controller/index.js');
const userController=require('./controller/user.js');
const ArticleController=require('./controller/article.js');
// const setController=require('./controller/set.js');

router.get('/',indexController.showIndex);
router.post('/doRegister',userController.signUp);
router.post('/doLogin',userController.signIn);
router.post('/set',userController.set);
router.get('/javascript',ArticleController.showJavascript);
// 127.0.0.1:3000/doRegister

module.exports=router;
