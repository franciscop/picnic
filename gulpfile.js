// CONFIG
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		rename = require('gulp-rename'),
		minify = require('gulp-minify-css');

gulp.task('default', ['build'], function() {});


// MAIN BUILD
// Create the latest versions
gulp.task('build', ['picnic', 'plugins']);


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
		.pipe(minify())
		.pipe(rename('picnic.min.css'))
		.pipe(gulp.dest('./releases'));
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
		.pipe(minify())
		.pipe(rename('plugins.min.css'))
		.pipe(gulp.dest('./releases'));
	});


// WEBSITE BUILD
// Create the latest version with all the plugins and the web code
gulp.task('web', function() {
	return gulp.src('./web/style/style.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./web/style'))
		.pipe(minify())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('./web/style'));
	});



// WATCH
gulp.task('watch', ['build', 'web'], function() {
	gulp.watch(['./plugins/*/*.scss', './src/*.scss', './themes/*/*.scss', './web/style/*.scss', '.web/style/*/*.scss'], ['build', 'web']);
	});
