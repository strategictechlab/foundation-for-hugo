const gulp         = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const browserSync  = require('browser-sync').create();
const sourcemaps   = require('gulp-sourcemaps');

const includePaths = [
    'node_modules/foundation-sites/scss',
    'node_modules/motion-ui/src'
];

function sassBuild() {
    return gulp.src(['assets/scss/app.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            includePaths : includePaths,
            outputStyle  : 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/css'));
};

function serve() {
    browserSync.init({
        proxy: "",
        // server : "./",
        notify: {
            styles:  [
                "display: none",
                "padding: 15px",
                "font-family: sans-serif",
                "position: fixed",
                "font-size: 0.9em",
                "z-index: 9999",
                "bottom: 0px",
                "right: 0px",
                "border-bottom-left-radius: 0",
                "border-bottom-right-radius: 0",
                "background-color: #1B2032",
                "margin: 0",
                "color: white",
                "text-align: center"
            ]
        },
    });
    gulp.watch("assets/scss/**/*.scss", sassBuild);
    gulp.watch(['**/*.html', '**/*.md']).on('all', browserSync.reload);
}

gulp.task('sass', sassBuild);
gulp.task('serve', gulp.series('sass', serve));
gulp.task('default', gulp.series('sass', serve));
