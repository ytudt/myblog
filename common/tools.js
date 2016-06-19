const moment = require('moment');
const md5 = require('md5');
const config = require('../config/config.js');

moment.locale('zh-cn'); // 使用中文

// 格式化时间
exports.formatDate = function(date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }

};

// md5加密
exports.md5 = function(message) {
  return md5(message + config.key)
}
