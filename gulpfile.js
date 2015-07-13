var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var install = require("gulp-install");
var reload = browserSync.reload;

gulp.task('install', function(){
	gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task('wiredep', ['install'], function () {
  var wiredep = require('wiredep').stream;
  
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('.'));
});

gulp.task('serve', ['wiredep'], function() {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
});

gulp.watch(['*.html', 'style/**/*.css', 'app/**/*.js'], {cwd: '.'}, reload);