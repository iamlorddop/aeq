const {src, dest, watch, parallel, series} = require('gulp')

const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean')
const avif = require('gulp-avif')
const webp = require('gulp-webp')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const fonter = require('gulp-fonter')
const ttf2woff2 = require('gulp-ttf2woff2')
const svgSprite = require('gulp-svg-sprite')
const include = require('gulp-include')

function pages() {
	return src('app/pages/*.html')
		.pipe(include({
			includePaths: 'app/components'
		}))
		.pipe(dest('app'))
		.pipe(browserSync.stream())
}

function fonts() {
	return src('app/assets/fonts/src/*.*')
		.pipe(fonter({
			formats: ['woff', 'ttf']
		}))
		.pipe(src('app/assets/fonts/*.ttf'))
		.pipe(ttf2woff2())
		.pipe(dest('app/assets/fonts'))
}

function images() {
	return src(['app/assets/images/src/*.*' , '!app/assets/images/src/*.svg' , '!app/assets/images/src/*.ico'])
		.pipe(newer('app/assets/images'))
		.pipe(avif({ quality : 50 }))
	
		.pipe(src('app/assets/images/src/*.*'))
		.pipe(newer('app/assets/images'))
		.pipe(webp())

		.pipe(src('app/assets/images/src/*.*'))
		.pipe(newer('app/assets/images'))
		.pipe(imagemin())

		.pipe(dest('app/assets/images'))
}

function sprite() {
	return src('app/assets/images/*.svg')
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite.svg',
					example: true
				}
			}
		}))
		.pipe(dest('app/assets/images'))
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
	return src(['app/js/wow.js','app/js/index.js','app/js/translate.js'])
		.pipe(concat('index.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream())
}

function watching() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	})
	watch(['app/scss/index.scss'], styles)
	watch(['app/assets/images'], images)
	watch(['app/js/index.js'], scripts)
	watch(['app/components/*', 'app/pages/*'], pages)
	watch(['app/*.html']).on('change', browserSync.reload)
}

function cleanDist() {
	return src('dist')
		.pipe(clean())
}

function building() {
	return src([
		'app/css/index.min.css',
		'app/assets/images/*.*',
		'!app/assets/images/*.svg',
		'app/assets/images/sprite.svg',
		'app/assets/fonts/*.woff',
		'app/js/index.min.js',
		'app/*.html'
	], {base : 'app'})
		.pipe(dest('dist'))
}

exports.styles = styles
exports.images = images
exports.fonts = fonts
exports.pages = pages
exports.sprite = sprite
exports.scripts = scripts
exports.watching = watching
exports.building = building

exports.build = series(cleanDist, building)
exports.default = parallel(styles, images, scripts, pages, watching)