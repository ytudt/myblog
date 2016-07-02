var config = require('../config/config.js');

var env = process.env.NODE_ENV || "development"


var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' }
    // { type: 'file', filename: './logs/cheese.log', category: 'cheese' }
  ]
});

var logger = log4js.getLogger('cheese');
logger.setLevel(config.isDev ||env !== 'test' ? 'DEBUG' : 'ERROR')

module.exports = logger;
