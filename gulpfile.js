// CONFIG
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		rename = require('gulp-rename'),
		minify = require('gulp-minify-css');

gulp.task('default', ['build'], function() {});


// MAIN BUILD
// Create the latest versions
gulp.task('build', ['plugins', 'picnic']);


// PICNIC BUILD
// Create the latest version for picnic.css
gulp.task('picnic', function() {
	return gulp.src('./src/picnic.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rename('picnic.css'))
		.pipe(gulp.dest('./releases'))
		.pipe(gulp.dest('./web/releases'))
		.pipe(minify())
		.pipe(rename('picnic.min.css'))
		.pipe(gulp.dest('./releases'))
		.pipe(gulp.dest('./web/releases'));
	});


// PLUGIN BUILD
// Create the latest version with all the plugins
gulp.task('plugins', function() {
	return gulp.src('./src/plugins.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rename('plugins.css'))
		.pipe(gulp.dest('./releases'))
		.pipe(gulp.dest('./web/releases'))
		.pipe(minify())
		.pipe(rename('plugins.min.css'))
		.pipe(gulp.dest('./releases'))
		.pipe(gulp.dest('./web/releases'));
	});



// WATCH
gulp.task('watch', ['build'], function() {
	gulp.watch(['./plugins/*/*.scss', './src/*.scss'], ['plugins']);
	});
