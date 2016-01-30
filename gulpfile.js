var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('transformJS', function () {
    return browserify({entries: './sorting.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('sorting.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build', 'transformJS'], function () {
    gulp.watch('*.jsx', ['build']);
    gulp.watch('*.js', ['transformJS']);
});

gulp.task('default', ['watch']);