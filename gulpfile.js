var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('gulp-exec');

var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
//var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
//var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var cache = require('gulp-cache');

var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('script-dev', function() {
	return gulp.src('src/*.js')
		.pipe(livereload(server));
});

gulp.task('css-dev', function() {
	return gulp.src('src/css/*.css')
		.pipe(livereload(server));
});

gulp.task('watch', function() {
	server.listen(35729, function(err) {
		if (err) {
			return console.log(err);
		}
		gulp.watch('src/*.js', ['script-dev']);
		gulp.watch('src/css/*.css', ['css-dev']);
	});
});

gulp.task('dist', function() {
	gulp.src('src/**/*')
		.pipe(gulp.dest('bower'));
});


