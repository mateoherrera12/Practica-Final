//const gulp = require('gulp');
var concat = require('gulp-concat');

// ***** Move JS Files to src/js ******
gulp.task('js', function() {
  return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/popper.js/dist/umd/popper.min.js',
      'node_modules/owl.carousel2/dist/owl.carousel.min.js',
      'node_modules/wowjs/dist/wow.min.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
      'node_modules/jarallax/dist/jarallax.min.js',
      'node_modules/jarallax/dist/jarallax-video.min.js',
      'node_modules/counterup/jquery.counterup.min.js',
      'node_modules/jquery-waypoints/waypoints.min.js',
      'node_modules/jquery.easing/jquery.easing.min.js'
    ])
    .pipe(gulp.dest("src/js"))
});

// ****** Combine All js files into one ******
gulp.task('scripts', function() {
  return gulp.src([
    './src/js/default-assets/avoid.console.error.js',
    './src/js/default-assets/classynav.js',
    'node_modules/owl.carousel2/dist/owl.carousel.min.js',
    'node_modules/wowjs/dist/wow.min.js',
    'node_modules/jquery-waypoints/waypoints.min.js',
    'node_modules/counterup/jquery.counterup.min.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    'node_modules/jarallax/dist/jarallax.min.js',
    'node_modules/jarallax/dist/jarallax-video.min.js',
    './src/js/default-assets/jquery.scrollup.min.js',
    'node_modules/jquery.easing/jquery.easing.min.js',
    './src/js/default-assets/ajax-content.js',
    './src/js/default-assets/jquery.barfiller.js'
  ])
    .pipe(concat('dento.bundle.js'))
    .pipe(gulp.dest('./src/js/'))
});

// ****** Move Font Awesome Fonts to src/fonts ******
gulp.task('fafonts', function() {
  return gulp.src([
      'node_modules/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest('src/fonts'))
})

// ****** Move Elegant Icons Fonts to src/css ******
gulp.task('elefonts', function() {
  return gulp.src([
      'node_modules/elegant-icons/fonts/*'
    ])
    .pipe(gulp.dest('src/css/fonts'))
})

// ****** Move CSS to src/css ******
gulp.task('css', function() {
  return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
      'node_modules/elegant-icons/style.css',
      'node_modules/wowjs/css/libs/animate.css',
      'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
    .pipe(gulp.dest('src/css'))
})

gulp.task('default', ['js', 'scripts', 'css', 'fafonts', 'elefonts']);
