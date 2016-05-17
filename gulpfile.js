const gulp=require('gulp');


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
