# myblog
## 使用步骤
  - 1. git clone git@github.com:ytudt/myblog.git
  - 2. npm install 下载后台所需包
  - 3. bower install 下载前台所需库
  - 4. 执行gulp copy任务 将前台需要的库复制到static下

  ## 目录结构
  -  app.js nodejs 入口文件
  -  package.json  npm配置文件
  -  bower.json bower配置文件
  -  gulpfile.js  gulp 任务js文件
  -  .gitignore  忽略提价文件
  -  config
      + config.js node 配置文件
  - controller 控制文件夹
  - node_modules node 所需包文件夹
  - bower_components 前台所需库文件夹
  - routes node路由文件夹
  - public 静态文件
     + css 全局样式文件夹
     + js 全局js文件夹
         - lib 前台需要的库
     + images 静态图片文件夹


注意:通过npm下载的gulp包有问题，此处在以前的工程中复制过来可以使用。

