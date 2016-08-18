'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

gulp.task('styles', function() {
    gulp.src('styles.scss')
        .pipe(sass({
            includePaths: [
                'node_modules/reset-css',
                'node_modules/frow/sass'
            ]
        }))
        .pipe(autoprefixer())
        .pipe(concat('styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    gulp.watch('styles.scss', ['styles']);
});

gulp.task('default', ['watch']);
