var gulp  = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');

gulp.task ('jsx', function () {
    return gulp.src([ 'jsx/todo.jsx', 'jsx/todo_input.jsx', 'jsx/todo_list.jsx', 'jsx/remaining.jsx', 'jsx/app.jsx', 'jsx/index.jsx' ])
                .pipe(react())
                .pipe(gulp.dest('js'));
});

gulp.task( 'browserify', ['jsx'], function() {
    return gulp.src( 'js/index.js' )
        .pipe(browserify())
        .pipe(gulp.dest('js'));
});

gulp.task( 'build', ['jsx', 'browserify'] );
gulp.task( 'default', ['build'] );