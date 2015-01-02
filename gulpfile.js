var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var rimraf = require('rimraf');
var webserver = require('gulp-webserver');

gulp.task('clean', function (cb) {
    rimraf('./build', cb);
});

gulp.task('clean_js', function (cb) {
    rimraf('app/js', cb);
});

gulp.task('default', function(){
    console.log('Hello World');
});

gulp.task('scripts', function() {
    gulp.src(['./app/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build/'))
});

gulp.task('compress', function() {
    gulp.src('app/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/'))
});

gulp.task('react', ['clean_js'], function () {
    return gulp.src('app/jsx/**/*.js')
    .pipe(react())
    .pipe(gulp.dest('app/js/'));
});

gulp.task('clean2', ['clean'], function() {
    // Something
});


gulp.task('webserver', ['react'], function() {
    gulp.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true
    }));
});
