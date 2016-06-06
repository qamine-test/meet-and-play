import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return plugins.nodemon({
    script: './dist/server/server.js'
    , ext: 'ts'
    , watch: ['src/models', 'src/server']
    , tasks: ['build.dev.server']
  });
}
