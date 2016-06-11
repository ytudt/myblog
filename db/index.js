const mongoose=require('mongoose');
const config=require('../config/config.js');
var logger = require('../common/logger');

mongoose.connect(config.db, {
  server: {poolSize: 20}
}, function (err) {
  if (err) {
    logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

require('./user');
require('./article');

exports.User= mongoose.model('User');
exports.Article= mongoose.model('Article');

