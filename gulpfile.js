const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpZIP = require('gulp-zip');
const babelJS = require('gulp-babel');
const terserJS = require('gulp-terser');
const purgeCSS = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');
const deleteAsync = require('del');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// Cariables setting
const _rootName = path.basename(__dirname);
const _tempName = '.temp';
const _buildName = 'dist';
const _sourceName = 'app';

// Processing Bundle CSS
function collectCSS() {
  return gulp
    .src([`./${_sourceName}/css/**/*.css`, `!./${_sourceName}/css/**/*.min.css`])
    .pipe(autoprefixer({ grid: 'autoplace', cascade: true }))
    .pipe(gulp.dest(`./${_tempName}/css/`))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(`./${_sourceName}/css/`))
    .pipe(browserSync.stream());
}

// Processing Bundle JS
function collectJS() {
  return gulp
    .src([`./${_sourceName}/js/**/*.js`, `!./${_sourceName}/js/**/*.min.js`])
    .pipe(babelJS({ presets: ['@babel/env'] }))
    .pipe(gulp.dest(`./${_tempName}/js/`))
    .pipe(terserJS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(`./${_sourceName}/js/`))
    .pipe(browserSync.stream());
}

// Processing build project
function collectBuild() {
  return gulp
    .src(
      [
        `./${_sourceName}/**/*.html`,
        `./${_sourceName}/js/**/*.min.js`,
        `./${_sourceName}/css/**/*.min.css`,
        `./${_sourceName}/fonts/**/*.*`,
        `./${_sourceName}/images/**/*.*`,
        `./${_sourceName}/site.webmanifest`,
        `./${_sourceName}/favicon.ico`,
        `./${_sourceName}/{favicon*,android*,apple*}.png`,
      ],
      { base: `./${_sourceName}/` },
    )
    .pipe(gulp.dest(`./${_buildName}/`))
    .pipe(gulp.src(`./${_tempName}/{js,css}/**/*.*`, { base: `./${_tempName}/` }))
    .pipe(gulp.dest(`./${_buildName}/`));
}

// Processing archiving build
function collectArchive() {
  return gulp
    .src(`./${_buildName}/**/*.*`)
    .pipe(gulpZIP(`${_rootName}.zip`))
    .pipe(gulp.dest('./'));
}

// Starting a server with file watching
function runServer() {
  browserSync.init({
    server: {
      baseDir: `./${_sourceName}/`,
    },
    port: 1234,
    open: true,
    online: true,
    notify: false,
  });

  gulp.watch([`./${_sourceName}/**/*.html`]).on('change', browserSync.reload);
  gulp.watch([`./${_sourceName}/js/**/*.js`, `!./${_sourceName}/js/**/*.min.js`], collectJS);
  gulp.watch([`./${_sourceName}/css/**/*.css`, `!./${_sourceName}/css/**/*.min.css`], collectCSS);
}

// Clean command
const cleanTemp = () => deleteAsync([`./${_tempName}/**/*`]);
const cleanBuild = () => deleteAsync([`./${_buildName}/**/*`]);
const cleanArchive = () => deleteAsync([`./${_rootName}.zip`]);

// Base tasks
exports.clean = gulp.series(cleanTemp, cleanBuild, cleanArchive);
exports.build = gulp.series(cleanTemp, cleanBuild, collectJS, collectCSS, collectBuild);
exports.archive = gulp.series(cleanTemp, cleanBuild, collectJS, collectCSS, collectBuild, cleanArchive, collectArchive);

// Default task
exports.default = gulp.series(collectJS, collectCSS, runServer);
