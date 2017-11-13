var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
    gulp.src('src/image/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/images/'))
})

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});
gulp.watch('src/sass/**/*.scss', ['sass']);
// gulp.task('sass:watch', function () {
//     gulp.watch('src/sass/**/*.scss', ['sass']);
// });

gulp.task('idear', function () {
    connect.server({
        root: 'src',
        livereload: true
    })
    gulp.watch('src/**/*.*', ['reload'])
});
gulp.task('reload', function () {
    gulp.src('src/**/*.*')
        .pipe(connect.reload());
})