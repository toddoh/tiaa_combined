// Gulp Dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var declare = require('gulp-declare');
var defineModule = require('gulp-define-module');
var handlebars = require('gulp-handlebars');

gulp.task('browserify-client', function() {
  return gulp.src('client/app.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: false
    }))
    .pipe(concat('swoosh_client_core.js'))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('templates', function(){
  gulp.src(['templates/*.handlebars'])
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(defineModule('node'))
    .pipe(gulp.dest('assets/render/'));
});

gulp.task('watch', function() {
  gulp.watch('build/**/*.js', ['browserify-client']);
  gulp.watch('client/**/*.css', ['minify']);
  gulp.watch('templates/**.handlebars', ['templates', 'browserify-client']);
  //gulp.watch('test/client/**/*.js', ['browserify-test']);
});

gulp.task('styles', function() {
  return gulp.src('client/**/*.css')
    .pipe(prefix({ cascade: true }))
    .pipe(concat('swoosh_client_core.css'))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('minify', ['styles'], function() {
  return gulp.src('build/swoosh_client_core.css')
    .pipe(minifyCSS())
    .pipe(rename('swoosh_client_core.min.css'))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('uglify', ['browserify-client'], function() {
  return gulp.src('build/swoosh_client_core.js')
    .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
    .pipe(concat('swoosh_client_core.min.js'))
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('build', ['uglify', 'minify']);
gulp.task('template', ['templates']);
gulp.task('lint', ['lint-client']);
