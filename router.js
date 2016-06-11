/*
* @Author: dongtongtong
* @Date:   2016-05-12 19:39:16
* @Last Modified by:   dongtongtong
* @Last Modified time: 2016-05-12 20:05:10
*/

'use strict';
// const express=require('express');

// const router=express.Router();
const express = require('express');

const router = express.Router();

const indexController=require('./controller/index.js');
const userController=require('./controller/user.js');

router.get('/',indexController.showIndex);
router.post('/doRegister',userController.signUp);
// 127.0.0.1:3000/doRegister

module.exports=router;
