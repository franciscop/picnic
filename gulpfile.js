// CONFIG
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		rename = require('gulp-rename'),
		minify = require('gulp-minify-css');

gulp.task('default', ['build'], function() {});


// MAIN BUILD
// Create the latest versions
gulp.task('build', function() {
	return gulp.src('./src/picnic_3.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rename('latest.css'))
		.pipe(gulp.dest('./releases'))
		.pipe(gulp.dest('./web/releases'))
		.pipe(minify())
		.pipe(rename('latest.min.css'))
		.pipe(gulp.dest('./releases'))
		.pipe(gulp.dest('./web/releases'));
	});



// WATCH
gulp.task('watch', ['build'], function() {
	gulp.watch(['./plugins/*/*.scss', './src/*.scss'], ['build']);
	});
