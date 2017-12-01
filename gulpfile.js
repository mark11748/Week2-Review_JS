var browserify = require('browserify');
var source = require('vinyl-source-stream'); //vinyl-source-stream is used for putting the browserified source code into a new file
var concat = require('gulp-concat'); //create a script by contatinating existing script files into a single file the bowser can read faster
var uglify = require('gulp-uglify'); // remove all unnecessary characters in JS files to optimize JavaScript execution
var utilities = require('gulp-util');
var del = require('del');
var gulp = require('gulp');
var jshint = require('gulp-jshint'); //linter package/debugging tool
var browserSync = require('browser-sync').create();
var babelify = require("babelify");
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});



gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./build/js"));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .transform(babelify.configure({
        presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

var buildProduction = utilities.env.production;

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower'); //use gulp.start("<task_name>") to run tasks in sequential order
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html" //entry point
    }
  });
  gulp.watch(['js/*.js'], ['jsBuild']); //if our js folder changes run "gulp jsBuild"
  gulp.watch(['bower.json'], ['bowerBuild']);
});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){ //convert to browser recognizable code and run jshint debugger
  browserSync.reload();
});
gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});
