var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-post-css'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simle-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


/*gulp.task('default',async function(){
console.log('Hooray...First task');
});

gulp.task('html', function() {
    console.log("Imagine something useful being done to your HTML here.");
  });

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/.css', function() {
    gulp.start('styles');
  });
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('C:/..Users/user/Desktop/Projects/travel-site/app/temp/styles'));
});

*/