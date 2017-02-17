var gulp = require('gulp'),

	// css
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),

	// js
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),

	rename = require('gulp-rename'),
	copy = require('gulp-copy'),
	del = require('del'),

	htmlmin = require('gulp-htmlmin');


// compile scss
gulp.task('scss', function () {

	gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'Android >= 4.0'],
			cascade: true,
		}))		
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(gulp.dest('dist/css'));

});

// compile javascript
gulp.task('script', function () {

	gulp.src([
		'src/js/classie.js', 
		'src/js/AnimOnScroll.js', 		
		'src/js/main.js', 		
		])
		.pipe(concat('main.js'))	
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
		.pipe(gulp.dest('dist/js'));

	gulp.src([
		'src/js/vendor/modernizr.custom.js',
		'src/js/vendor/jquery-3.1.1.min.js',
		'src/js/vendor/isotope.pkgd.min.js',
		'src/js/vendor/lodash.min.js',
		'src/js/vendor/data.min.js',
		])
		.pipe(concat('vendor.js'))	
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
		.pipe(gulp.dest('dist/js'));

});

// copy html
gulp.task('copy', function () {

	gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

	gulp.src('js/data.min.js')
		.pipe(copy('dist'));		

});

// clean
gulp.task('clean', function () {

	return del(['dist/**', 'css/**', 'js/**']);

});

// build
gulp.task('build', ['clean'], function () {

	gulp.start('scss', 'script', 'copy');

});

// default
gulp.task('default', function () {

	// watch scss files
	gulp.watch('src/scss/**/*.scss', ['scss']);

	// watch javascript files
	gulp.watch('src/js/**/*.js', ['script']);

});