import baseConfig from './rollup.config.base';

import { name } from './package.json';

export default {
  ...baseConfig,
  output: [{
    file: `temp/${name}.js`,
    format: 'cjs',
    name,
    sourcemap: 'inline'
  }],
};
