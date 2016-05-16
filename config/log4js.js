/*
 * @Author: dongtongtong
 * @Date:   2016-05-16 17:29:08
 * @Last Modified by:   dongtongtong
 * @Last Modified time: 2016-05-16 20:20:34
 */

const log4js = require('log4js');
const logger = log4js.getLogger();
// config = {
//   type: {
//     appenders: [
//       { type: 'console' },
//       { type: 'file', filename: 'logs/cheese.log', category: 'cheese' }
//     ]
//   },
//   category: nomal,
//   levels: 'DEBUG'
// }
exports.config = {
  type: {
    appenders: [
      { type: 'console' },
      { type: 'file', filename: 'logs/cheese.log' }
    ]
  },
  category: 'nomal',
  levels: 'DEBUG'
}
exports.nodelog4js = function(config) {
  log4js.configure(config.type);
  var logger = log4js.getLogger(config.category);
  logger.setLevel(config.levels);
  return logger;
}
