import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';
import { terser } from 'rollup-plugin-terser';

export default {
  input: `./src/index.ts`,
  output: [
    {
      file: `./bundle/deup.bundle.js`,
      format: 'umd',
      name: 'Deup',
    },
    {
      file: `./bundle/deup.min.js`,
      format: 'umd',
      name: 'Deup',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    nodeResolve({ preferBuiltins: true, browser: true }),
    json(),
    commonjs({ browser: true }),
    typescript(),
    optimizeLodashImports(),
  ],
};


