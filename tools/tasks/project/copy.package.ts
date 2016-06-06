import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

import {DIST_DIR} from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  return gulp.src('package.json')
    .pipe(plugins.jsonTransform(function (data:any) {
      delete data.scripts;
      delete data.devDependencies;
      
      return data;
    }))
    .pipe(gulp.dest(DIST_DIR));
};
