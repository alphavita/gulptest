var gulp = require('gulp');
var watch = require('gulp-watch');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourceMap = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var cssMin = require('gulp-minify-css');
var rimRaf = require('rimraf');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plumber = require('gulp-plumber');

//пути
var patch = {

	build: {
		html: 'build',
		js: 'build/js/',
		css: 'build/css/'
	},

	src: {
		html: 'src/*.html',
		js: 'src/js/main.js',
		style: 'src/css/*.scss'
	},

	watch: {
		html: 'src/**/*.html',
		js: 'src/**/*.js',
		style: 'src/css/**/*.scss'
	},
	clean: './build'
};







gulp.task('webserver', function() {
	browserSync({
		server: {
			baseDir:"./build"
		},
		host: 'localhost',
		port: 3000,
		tunnel: true
		});
});

gulp.task('html:build', function() {
	gulp.src(patch.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(patch.build.html))
		.pipe(reload({stream:true}));
});

gulp.task('js:build', function() {
	gulp.src(patch.src.js)
		.pipe(plumber())
		.pipe(rigger())
		.pipe(sourceMap.init())
		.pipe(uglify())
		.pipe(sourceMap.write())
		.pipe(gulp.dest(patch.build.js))
		.pipe(reload({stream:true}));
});

gulp.task('style:build', function() {
	gulp.src(patch.src.style)
		.pipe(plumber())
		.pipe(rigger())
		.pipe(sourceMap.init())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(cssMin())
		.pipe(sourceMap.write())
		.pipe(gulp.dest(patch.build.css))
		.pipe(reload({stream:true}));
});

gulp.task('build', [
	'html:build',
	'js:build',
	'style:build']);

gulp.task('watch', function(){
	watch([patch.watch.js], function(ev, callback) {
		gulp.start('js:build');
		});
	watch([patch.watch.html], function(ev, callback) {
		gulp.start('html:build');
		});
	watch([patch.watch.style], function(ev, callback) {
		gulp.start('style:build');
		});
	});

gulp.task('clean', function (callback) {
	rimRaf(patch.clean, callback);
	});

gulp.task('default', ['build', 'webserver', 'watch'])

