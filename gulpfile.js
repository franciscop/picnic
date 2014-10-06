var gulp = require('gulp'),
<<<<<<< HEAD
=======
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
>>>>>>> f809fc136b38de346b6a077857ae41e9f5698b00
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
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./releases'))
		.pipe(minify())
		.pipe(rename('latest.min.css'))
		.pipe(gulp.dest('./releases'));
});
