const gulp = require('gulp');

gulp.task('lib', (done) => {
    return gulp.src([
		'./bower_components/**/*.min.js', 
		'./bower_components/**/*.min.js.map', 
		'./bower_components/**/*.min.css',
		'./bower_components/**/*.min.css.map'
	], { base: './bower_components/**/' })
               .pipe(gulp.dest('lib/*'));
});


gulp.task('default', ['lib']);