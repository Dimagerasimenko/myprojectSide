var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('css', function(){
  return gulp.src('style/style.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(postcss([
    autoprefixer()
  ]))
.pipe(gulp.dest('css'))
.pipe(server.stream());
});

gulp.task('server', function () {
  server.init({
    server: '',
    notify: false,//уведомления
    open: true,
    cors: true,//кроссдоменный запрос
    ui: false
});

gulp.watch('style/**/*.less', gulp.series('css'));

gulp.watch('**/*.html').on('change', server.reload);

gulp.watch('**/*.js').on('change', server.reload);


});

gulp.task('start', gulp.series('css', 'server'));
