var gulp = require('gulp');
var concat = require('gulp-concat');
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

gulp.task('compileJsx', ['cleanJs'], function () {
    return gulp.src('app/jsx/**/*.js')
    .pipe(react())
    .pipe(gulp.dest('app/js/'));
});

gulp.task('watchJsx', function () {
    gulp.watch('app/jsx/**/*.js', ["compileJsx"]);
});

gulp.task('usemin', function() {
    gulp.src('app/index.html')
    .pipe(usemin({
        js:[uglify()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build_', ['cleanBuild', 'compileJsx'], function () {
    gulp.src('app/index.html')
    .pipe(usemin({
        js:[uglify()],
        css:[minifyCSS()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('webServer', function() {
    gulp.src('./app')
    .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: false
    }));
});

gulp.task("server", ["webServer", "watchJsx"]);
gulp.task("build", ["build_"])
