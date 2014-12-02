var gulp = require('gulp'),
	bower = require('gulp-bower'),
	less = require('gulp-less'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	cssConcat = require('gulp-concat-css'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css');

var lessFiles = ['components/less/*.less'];
var cssFiles = ['lib/HTML5-Reset/assets/css/reset.css', 'lib/bootstrap/dist/css/bootstrap.css', 'components/css/*.css'];
var jsFiles = ['lib/jquery/dist/jquery.js', 'lib/bootstrap/dist/js/bootstrap.js'];

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task('less', function() {
	gulp.src(lessFiles)
		.pipe(less())
		.pipe(gulp.dest('components/css'));
});

gulp.task('css', function() {
	gulp.src(cssFiles)
		.pipe(cssConcat('site.css'))
		.pipe(minifyCSS({keepBreaks:true}))
		.pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
	gulp.src(jsFiles)
		.pipe(concat('site.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});