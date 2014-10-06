// CONFIG
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		rename = require('gulp-rename'),
		minify = require('gulp-minify-css');

gulp.task('default', ['build'], function() {});



// MAIN BUILD
// First execute the tests
// Then create the latest versions
gulp.task('build', ['normal', 'flat'], function() {
	return gulp.src('./src/picnic.scss')
		.pipe(sass())
		.pipe(rename('latest.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./releases'))
		.pipe(minify())
		.pipe(rename('latest.min.css'))
		.pipe(gulp.dest('./releases'));
});



// WATCH
gulp.task('watch', ['build'], function() {
	gulp.watch(['./src/*.scss'], ['build']);
});



// TESTS
gulp.task('test', ['normal', 'flat'], function() {
	gulp.watch(['./src/*.scss'], ['normal', 'flat']);
});

gulp.task('normal', [], function() {
	return gulp.src('./src/picnic.scss')
		.pipe(sass())
		.pipe(rename('latest.css'))
		.pipe(gulp.dest('./test/'));;
});

gulp.task('flat', [], function() {
	return gulp.src('./src/flat.scss')
		.pipe(sass())
		.pipe(rename('flat.css'))
		.pipe(gulp.dest('./test/'));;
});
