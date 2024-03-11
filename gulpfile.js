const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat');
const sourceMap = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const paths = {
	html: {
		src: 'src/*.html',
		dest: 'dist/',
	},
	css: {
		src: 'src/scss/*.scss',
		dest: 'dist/css/'
	},
	js: {
		src: 'src/js/*.js',
		dest: 'dist/js/'
	}
}

// html minify 
function html() {
	return gulp.src(paths.html.src)
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(size({
			showFiles: true
		}))
		.pipe(gulp.dest(paths.html.dest))
}
// build styles
function css() {
	return gulp.src(paths.css.src)
		.pipe(sourceMap.init())
		.pipe(sass())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cleanCss({
			level: 2
		}))
		.pipe(rename({
			basename: 'main',
			suffix: '.min'
		}))
		.pipe(sourceMap.write('.'))
		.pipe(size({
			showFiles: true
		}))
		.pipe(gulp.dest(paths.css.dest))
}

// build Scripts 
function js() {
	return gulp.src(paths.js.src)
		.pipe(sourceMap.init())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(concat('asrooor.min.js'))
		.pipe(sourceMap.write('.'))
		.pipe(size({
			showFiles: true
		}))
		.pipe(gulp.dest(paths.js.dest))
}

// watch tasks
function watch() {
	gulp.watch(paths.html.src, html);
	gulp.watch(paths.css.src, css);
	gulp.watch(paths.js.src, js);
}
const build = gulp.series(gulp.parallel(css, js, html), watch)

exports.css = css;
exports.js = js;
exports.html = html;
exports.build;
exports.default = build