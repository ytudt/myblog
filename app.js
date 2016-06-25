var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const log4js=require('./config/log4js.js');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var config=require('./config/config');
const route=require('./router')

var app = express();

port=process.env.PORT || config.port;

// view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'xtpl');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
if(config.isDev){
  // app.use(logger('dev'));
}

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'userAvatar')));

// 加载路由中间件
app.use(require('./router'));

// domin错误控制
app.use(function (req,res, next) {

  var d = domain.create();
  d.on('error', function (err) {
    console.log('进了domin');
    res.statusCode = 500;
    res.json({'sucess':false,'messag': 'domain处理异常'});

  });
  d.add(req);
  d.add(res);
  d.run(next);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
// 调用log4js
log4js.nodelog4js (log4js.config).debug('debug logger');


app.listen(port,config.ipAdd,function(){
  console.log('server is running at port '+port);
})
