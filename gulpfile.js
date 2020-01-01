let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let browserSync = require('browser-sync').create();

function browerReload(done) {
    browserSync.reload();
    done();

}

function Style(done) {

    gulp.src('./sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind('erorr'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());

    done();
}






function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

function watchFiles() {
    gulp.watch("./sass/**/*", Style);
    gulp.watch("./**/*.html", browerReload);
    gulp.watch("./**/*.js", browerReload);
    gulp.watch("./**/*.php", browerReload);
}




// gulp.task(Style)

gulp.task('default', gulp.parallel(watchFiles, sync));
