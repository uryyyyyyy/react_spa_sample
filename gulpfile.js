var gulp = require('gulp');
var JSX_PATH = './source/jsx/**/*.js';
var JS_PATH = './dev/js/**/*.js';
var JS_DEST = './dev/js';
var BOWER_PATH = './dev/bower_components/**';
var BOWER_DEST = './build/bower_components/';
var DEV_PATH = './dev/';
var BUILD_DEST = './build/';

gulp.task('cleanBuild', function (cb) {
    var rimraf = require('rimraf');
    rimraf(BUILD_DEST, cb);
});

gulp.task('cleanJs', function (cb) {
    var rimraf = require('rimraf');
    rimraf(JS_DEST, cb);
});

gulp.task('jshint', function() {
    var jshint = require('gulp-jshint');
    return gulp.src(JS_PATH)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('easymock', function () {
    var MockServer = require('easymock').MockServer;
    var options = {
        keepalive: true,
        port: 3000,
        path: './webAPI',
    };
    var server = new MockServer(options);
    server.start();
});

gulp.task('jsxToJs', ['cleanJs'], function () {
    var react = require('gulp-react');
    return gulp.src(JSX_PATH)
    .pipe(react())
    .pipe(gulp.dest(JS_DEST));
});

gulp.task('watchJsx', function () {
    gulp.watch(JSX_PATH, ["jsxToJs"]);
});

gulp.task('copyBower', ['cleanBuild'], function () {
    return gulp.src(BOWER_PATH)
    .pipe(gulp.dest(BOWER_DEST));
});

gulp.task('build', ['copyBower', 'jsxToJs'], function () {
    var minifyCSS = require('gulp-minify-css');
    var uglify = require('gulp-uglify');
    var usemin = require('gulp-usemin');
    gulp.src('dev/index.html')
    .pipe(usemin({
        js:[uglify()],
        css:[minifyCSS()]
    }))
    .pipe(gulp.dest(BUILD_DEST));
});

gulp.task('devServer', ['easymock'], function() {
    var webserver = require('gulp-webserver');
    gulp.src(DEV_PATH)
    .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: false,
        proxies: [{
            source: '/webAPI',
            target: 'http://localhost:3000/'
        }]
    }));
});

gulp.task('buildServer', ['build', 'easymock'], function() {
    var webserver = require('gulp-webserver');
    gulp.src(BUILD_DEST)
    .pipe(webserver({
        livereload: false,
        directoryListing: false,
        open: false,
        proxies: [{
            source: '/webAPI',
            target: 'http://localhost:3000/'
        }]
    }));
});

gulp.task("dev-server", ["devServer", "watchJsx"]);
gulp.task("build-server", ["buildServer"]);
