connect = require 'gulp-connect'
gulp = require 'gulp'
pug = require 'gulp-pug'
sass = require 'gulp-sass'

browserify = require 'browserify'
buffer = require 'vinyl-buffer'
clean = require 'gulp-clean'
concat = require('gulp-concat')
coffeeify = require 'coffeeify'
imagemin = require 'gulp-imagemin'
log = require 'gulplog'
robots = require 'gulp-robots'
include = require('gulp-include')
autoprefixer = require('gulp-autoprefixer')
cleancss = require('gulp-clean-css')
notify = require('gulp-notify')
source = require 'vinyl-source-stream'
sourcemaps = require 'gulp-sourcemaps'
tabify = require 'gulp-tabify'
watchify = require 'watchify'

opts =
	entries: './src/main.coffee'
	extension: ['.coffee', '.js']
	debug: true
	transform: [coffeeify]

b = watchify( browserify(watchify.args, opts) )

gulp.task('clean', (done) ->
	return gulp.src('html/*', read: false)
		.pipe( clean(force: true) )
	do done
)

gulp.task('imagemin', (done) ->
	gulp.src('src/img/**/*')
		.pipe(imagemin([
			imagemin.gifsicle(
				interlaced: true # Interlace gif for progressive rendering
				optimizationLevel: 2 # An optimization level between 1 and 3
			)
			imagemin.jpegtran(
				progressive: true # Lossless conversion to progressive
				arithmetic: false # Use arithmetic coding
			)
			imagemin.optipng(
				optimizationLevel: 2 # An optimization level between 0 and 7
				bitDepthReduction: true # Apply bit depth reduction
				colorTypeReduction: true # Apply color type reduction
				paletteReduction: true # Apply palette reduction
			)
			imagemin.svgo()
		]))
		.pipe(gulp.dest('html/assets/img'))
	do done
)

gulp.task('scripts', (done) ->
	gulp.src('src/js/common.js')
		.pipe(concat('scripts.min.js'))
		.pipe(include())
			.on('error', console.log)
		.pipe( gulp.dest('html/assets/js') )
		.pipe( do connect.reload )
	do done
)
gulp.task('build', (done) ->
	b.bundle()
		.on( 'error', log.error.bind(log, 'Browserify Error') )
		.pipe( source('soursemap.js') )
		.pipe( do buffer )
		.pipe( sourcemaps.init(loadMaps: true) )
		.pipe( sourcemaps.write('./') )
		.pipe( gulp.dest('html/assets/js') )
		.pipe( do connect.reload )
	do done
)

b.on( 'time', (time) -> console.log "#{time}ms" )
b.on( 'log', log.info )

gulp.task('connect', (done) ->
	connect.server(
		port: 8000
		livereload: true
		root: 'html'
	)
	do done
)

gulp.task('pug', (done) ->
	gulp.src('src/*.+(pug|jade)')
		.pipe( pug(pretty: true) )
		.pipe( tabify(2, false) )
		.pipe( gulp.dest('html') )
		.pipe(robots(
			useragent: '*'
			disallow: ['/']
		))
		.pipe( gulp.dest('html') )
		.pipe( do connect.reload )
	do done
)

gulp.task('sass', (done) ->
	return gulp.src('src/sass/**/*.sass')
		.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleancss( {level: { 1: { specialComments: 0 } } }))
		# .pipe( sass(outputStyle: 'compressed').on('error', sass.logError) )
		.pipe( gulp.dest('html/assets/css') )
		.pipe( do connect.reload )
	do done
)
gulp.task('fonts',  (done) ->
	return gulp.src('src/fonts/**/*+(eot|ttf|woff)')
	.pipe( gulp.dest('html/assets/fonts') )
)
gulp.task('files',  (done) ->
	return gulp.src('src/files/**/*+(pdf)')
	.pipe( gulp.dest('html/assets/files') )
)
gulp.task('watch', (done) ->
	gulp.watch( 'src/**/*+(pug|jade)', gulp.series('pug') )
	gulp.watch( 'src/**/*.sass', gulp.series('sass') )
	gulp.watch( 'src/**/*.coffee',  gulp.series('build') )
	gulp.watch( 'src/**/*.js',  gulp.series('scripts') )
	gulp.watch( 'src/**/*+(svg|jpg|png)', gulp.series('imagemin') )
	do done
)

gulp.task('default', gulp.series('clean', gulp.parallel('imagemin', 'build', 'scripts', 'sass', 'pug', 'fonts' ,  'files'), 'connect', 'watch'))
