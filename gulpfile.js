const gulp=require('gulp');


// ============执行此任务拷贝前台库到public/js/lib==================
gulp.task('copy', function () {
  return gulp.src([
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    ])
    .pipe(gulp.dest('public/js/lib'));
});


//================主任务==================================================
