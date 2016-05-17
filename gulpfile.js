const gulp=require('gulp');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const cleanCss=require('gulp-clean-css');


// ============执行此任务拷贝前台库到public/js/lib==================
gulp.task('copyJs', function () {
  return gulp.src([
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-touch/angular-touch.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
    ])
    .pipe(gulp.dest('public/js/lib'));
});
// ============执行此任务拷贝前台css库到public/css/lib==================
gulp.task('copyCss', function () {
  return gulp.src([
    'bower_components/angular-bootstrap/ui-bootstrap-csp.css',
    'bower_components/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(gulp.dest('public/css/lib'));
});


//================主任务==================================================
// // // 合并js和css 还没搞定
// gulp.task('merge', function () {
//     return gulp.src('views/index.xtpl')
//         .pipe(useref())
//         .pipe(gulp.dest('./views'));
// });

// 压缩js
gulp.task('minifyJs',[], function() {
  return gulp.src('./public/js/lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/lib'));
});
// 压缩css
gulp.task('minifyCss',[],function(){
  return gulp.src('./public/css/lib/*.css')
  .pipe(cleanCss())
  .pipe(gulp.dest('./public/css/lib/'));
});
// 默认任务
gulp.task('default',['minifyJs','minifyCss'],function(){
  console.log('任务完成');
});