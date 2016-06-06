import * as gulp from 'gulp';

import { DIST_DIR } from '../../config';

export = () => {
  return gulp.src('ProcFile')
    .pipe(gulp.dest(DIST_DIR));
};
