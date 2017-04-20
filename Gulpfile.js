/*
    gulp -> Automatizador de tareas
    sass -> Generador de archivos css
    rename -> Renombrador de archivos generados por gulp
    watchigy -> Se quedará viendo los cambios del servidor
*/ 

/* Se obtendrán los package descargados previamente alojados en node_modules */
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var preset =  require('babel-preset-es2015');
var watchify = require('watchify');

/*Tarea para generar un archivo sass y convertilo en css*/
gulp.task('styles', function (){
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'));
});

/*Tarea para copiar los archivos de carpeta assets a otra llamada public*/ 
gulp.task('assets', function (){
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'));
});


function compile(watch) {
  var bundle = watchify(browserify('./src/index.js', {debug: true}));

  function rebundle() {
    bundle
      .transform(babel, preset)
      .bundle()
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }

  if (watch) {
    bundle.on('update', function () {
      console.log('--> Bundling...');
      rebundle();
    });
  }

  rebundle();
}

/*Tarea para generar el archivo app.js que llevará la lógica de la página
  adicionalmente se podrá escribir en EcmaScript*/
// gulp.task('scripts', function (){
//     browserify('./src/index.js')
//         // .transform(babel)
//         .transform(babel, preset)
//         .bundle()
//         .pipe(source('index.js'))
//         .pipe(rename('app.js'))
//         .pipe(gulp.dest('public'));
// });

gulp.task('build', function () {
  return compile();
});

gulp.task('watch', function () { return compile(true); });


/*Con el comando gulp se podrán generar las tareas establecidas por la función task*/

gulp.task('default', ['styles', 'assets', 'build']);