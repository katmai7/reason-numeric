import baseConfig from './rollup.config.base';
import serve from 'rollup-plugin-serve';
import jsx from 'rollup-plugin-jsx'

import { name } from './package.json';

export default {
  ...baseConfig,
  input: 'example/index.js',
  output: [{
    file: `example/temp/index.js`,
    format: 'es',
    name,
    sourcemap: 'inline'
  }],
  plugins: [
    ...baseConfig.plugins,
    jsx({ factory: 'React.createElement' }),
    serve({
      port: 8080,
      contentBase: ['']
    })
  ]
};
