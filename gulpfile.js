var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

// var scsslint = require('gulp-scss-lint');

gulp.task('jade', function() {
  return gulp.src([
      'app/**/*.jade'
    ])
    .pipe($.cached('jadeCache'))
    .pipe($.plumber())
    .pipe($.jadeInheritance())
    .pipe($.jade({
       pretty: true
    }))
    .pipe(gulp.dest('run'));
});

// gulp.task('style', function () {
//   return gulp.src([
//       'app/**/*.scss',
//       '!app/**/_*.scss'
//     ])
//     .pipe($.cached('scssCache'))
//     .pipe($.plumber())
//     .pipe($.rubySass({
//       sourcemap: false,
//       style: 'expanded',
//       precision: 10,
//       compass: true
//     }))
//     .pipe($.filter('**/*.css'))
//     .pipe($.sourcemaps.init())
//     .pipe($.autoprefixer())
//     .pipe($.sourcemaps.write())
//     .pipe(gulp.dest('run'));
// });

// gulp.task('jshint', function() {
//   return gulp.src([
//       'app/**/*.js',
//       '!app/lib/**/*.js'
//     ])
//     //.pipe($.cached('jshintCache'))
//     .pipe($.jshint())
//     .pipe($.jshint.reporter('jshint-stylish'));
// });

// gulp.task('scsslint', function() {
//   gulp.src([
//       'app/**/*.scss',
//       'app/scss/bootstrap/**/*.scss'
//     ])
//     .pipe($.cached('scssCache'))
//     .pipe(scsslint());
// });

// gulp.task('karma', function() {
//   gulp.src([
//     'test/**/*.spec.js',
//     'app/js/**/*.js'
//   ]).pipe($.karma({
//     configFile: 'karma.conf.js',
//     action: 'watch'
//   }));
// });

// gulp.task('clean', require('del').bind(null, [
//   'dist',
//   'run',
//   'test/ui/**/*.xml'
// ]));

// gulp.task('images', function () {
//   return gulp.src('app/images/**/*')
//     .pipe($.imagemin({
//       progressive: true,
//       interlaced: true
//     }))
//     .pipe(gulp.dest('run/images'));
// });

// gulp.task('icon', function() {
//   return gulp.src('app/favicons/**/*')
//     .pipe(gulp.dest('run/favicons'));
// });

gulp.task('build', [
  // 'style',
  'jade'
], function() {

});

gulp.task('watch', ['build'], function () {
//   gulp.watch('app/**/*.scss', ['style']);
  gulp.watch('app/**/*.jade', ['jade']);
//   gulp.watch('app/images/**/*', ['images']);
//   gulp.watch('app/**/*.js', ['jshint']);
//   // gulp.watch('app/fonts/**/*', ['fonts']);
});