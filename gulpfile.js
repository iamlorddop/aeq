const {src, dest, watch, parallel, series} = require('gulp')

const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean')

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	})
}

function styles() {
	return src('app/scss/index.scss')
		.pipe(autoprefixer({overrideBrowserslist: ['last 10 version']}))
		.pipe(concat('index.min.css'))
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(dest('app/css'))
		.pipe(browserSync.stream())
}

function scripts() {
	return src([
		'node_modules/swiper/swiper-bundle.js',
		'app/js/index.js'
	])
		.pipe(concat('index.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream())
}

function watching() {
	watch(['app/scss/index.scss'], styles)
	watch(['app/js/index.js'], scripts)
	watch(['app/*.html']).on('change', browserSync.reload)
}

function cleanDist() {
	return src('dist')
		.pipe(clean())
}

function building() {
	return src([
		'app/css/index.min.css',
		'app/js/index.min.js',
		'app/*.html'
	], {base : 'app'})
		.pipe(dest('dist'))
}

exports.browsersync = browsersync
exports.styles = styles
exports.scripts = scripts
exports.watching = watching

exports.build = series(cleanDist, building)
exports.default = parallel(styles, scripts, browsersync, watching)