var gulp = require('gulp'),
		rename = require('gulp-rename'),
		minify = require('gulp-uglify');

gulp.task('default', ['build'], function() {});

gulp.task('watch', ['test'], function() {
	gulp.watch(['./src/*.scss'], ['test']);
});

gulp.task('test', [], function() {
	return gulp.src('./src/picnic.scss')
		.pipe(sass())
		.pipe(rename('latest.css'))
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
