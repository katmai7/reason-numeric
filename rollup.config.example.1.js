import baseConfig from './rollup.config.base';
import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';

import { name } from './package.json';

export default {
  ...baseConfig,
  input: 'example/index.js',
  output: [{
    file: `example/temp/index.js`,
    format: 'umd',
    name,
    sourcemap: 'inline'
  }],
  plugins: [
    babel({
      babelrc: false,
      presets: [
        ['env', { modules: false }],
        'react'
      ],
      exclude: 'node_modules/**'
    }),
    ...baseConfig.plugins,

    serve({
      port: 8080,
      contentBase: ['']
    })
  ]
};
