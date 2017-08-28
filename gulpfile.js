var gulp = require('gulp');
var uglify = require('gulp-uglify');
var exec = require('child_process').exec;
var server = require( 'gulp-develop-server');
var babel = require('gulp-babel');

var Paths = {
    react_src:'Front_src/**/*.js',
    react_dest: 'Front_babel'
};

gulp.task('babel',function(){
    gulp.src(Paths.react_src)
        .pipe(babel())
        .pipe(gulp.dest(Paths.react_dest));
});

gulp.task('webpack', ['babel'],function (cb) {
    exec('webpack', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if(err) return cb(err);
        cb();
    });
});

// run server
gulp.task( 'server_start', function() {
    exec('python manage.py runserver', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if(err) return cb(err);
        cb();
    });
});

gulp.task('watch',['webpack'],function(){
    gulp.watch([Paths.react_src],['babel','webpack']);
});

gulp.task('default', ['babel','webpack','watch']);