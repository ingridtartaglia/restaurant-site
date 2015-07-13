var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
	console.log('oi');
});

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('.'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});