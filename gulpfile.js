var gulp = require('gulp');
var watchLess = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('less', function () {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watchLess', function () {
    gulp.watch('./less/*.less', ['less']);
});



gulp.task('default', ['less', 'watchLess']);