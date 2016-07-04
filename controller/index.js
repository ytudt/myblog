/*
 * @Author: dongtongtong
 * @Date:   2016-05-12 19:41:38
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-04 20:42:21
 */

'use strict';

exports.showIndex = function(req, res, next) {
    console.log('首页');
     console.log(req.session.userInfo);

    // if (req.session.userInfo) {
    //     let lologinname = req.session.userInfo.lologinname;
    //     // res.json({
    //     //     code: 200,
    //     //     msg: 'success',
    //     //     avatar: data.avatar,
    //     //     lologinname
    //     // });
    //      res.render('index',{
    //         code: 200,
    //         msg: 'success',
    //         avatar: data.avatar,
    //         lologinname
    //     });
    // }else{
      res.render('index');
    // }


}
