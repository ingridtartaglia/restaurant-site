var gulp = require('gulp');

gulp.task('default', function(){
	console.log('oi');
});

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('.'));
});