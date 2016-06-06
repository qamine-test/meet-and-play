import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { argv } from 'yargs';

import { APP_SRC } from '../../config';

const NAME = argv['name'].toLowerCase();
const CAPITALIZED_NAME = NAME.charAt(0).toUpperCase() + NAME.slice(1);

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src('templates/+component/**')
    .pipe(plugins.replace('{{name}}', NAME))
    .pipe(plugins.replace('{{nameUpperCase}}', CAPITALIZED_NAME))
    .pipe(plugins.if('**/index.ts.template', plugins.rename({
      basename: 'index',
      extname: '.ts'
    })))
    .pipe(plugins.if('**/template.component.e2e-spec.ts.template', plugins.rename({
      basename: NAME + '.component.e2e-spec',
      extname: '.ts'
    })))
    .pipe(plugins.if('**/template.component.html', plugins.rename({
      basename: NAME + '.component',
      extname: '.html'
    })))
    .pipe(plugins.if('**/template.component.scss', plugins.rename({
      basename: NAME + '.component',
      extname: '.scss'
    })))
    .pipe(plugins.if('**/template.component.spec.ts.template', plugins.rename({
      basename: NAME + '.component.spec',
      extname: '.ts'
    })))
    .pipe(plugins.if('**/template.component.ts.template', plugins.rename({
      basename: NAME + '.component',
      extname: '.ts'
    })))
    .pipe(gulp.dest(APP_SRC + "/app/+" + NAME));
};
