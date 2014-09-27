var gulp = require('gulp'),
		sass = require('gulp-sass'),
		rename = require('gulp-rename'),
		minify = require('gulp-minify-css');


gulp.task('default', ['build'], function() {});

gulp.task('watch', ['build'], function() {
	gulp.watch(['./src/*.scss'], ['build']);
});

gulp.task('test', [], function() {
	return gulp.src('./src/picnic.scss')
		.pipe(sass())
		.pipe(rename('latest.min.css'))
		.pipe(gulp.dest('./test/'));;
});

gulp.task('build', ['test'], function() {
	return gulp.src('./src/picnic.scss')
		.pipe(sass())
		.pipe(rename('latest.css'))
		.pipe(gulp.dest('./releases'))
		.pipe(minify())
		.pipe(rename('latest.min.css'))
		.pipe(gulp.dest('./releases'));
});
