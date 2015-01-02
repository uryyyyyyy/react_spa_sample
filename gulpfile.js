var gulp = require('gulp');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var rimraf = require('rimraf');
var webserver = require('gulp-webserver');
var rename = require ('gulp-rename');
var usemin = require('gulp-usemin');
var minifyCSS = require('gulp-minify-css');

gulp.task('cleanBuild', function (cb) {
    rimraf('./build', cb);
});

gulp.task('cleanJs', function (cb) {
    rimraf('app/js', cb);
});

gulp.task('cleanBower', function (cb) {
    rimraf('build/bower_components', cb);
});

gulp.task('compileJsx', ['cleanJs'], function () {
    return gulp.src('app/jsx/**/*.js')
    .pipe(react())
    .pipe(gulp.dest('app/js/'));
});

gulp.task('watchJsx', function () {
    gulp.watch('app/jsx/**/*.js', ["compileJsx"]);
});

gulp.task('copyBower', ['cleanBower'], function () {
    return gulp.src('app/bower_components/**')
    .pipe(gulp.dest('build/bower_components'));
});

gulp.task('build_', ['cleanBuild', 'compileJsx', 'copyBower'], function () {
    gulp.src('app/index.html')
    .pipe(usemin({
        js:[uglify()],
        css:[minifyCSS()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('appServer', function() {
    gulp.src('./app')
    .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: false
    }));
});

gulp.task('buildServer', function() {
    gulp.src('./build')
    .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: false
    }));
});

gulp.task("dev-server", ["appServer", "watchJsx"]);
gulp.task("build", ["build_"]);
gulp.task("build-server", ["buildServer"]);
