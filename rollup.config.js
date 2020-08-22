import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from "rollup-plugin-uglify";

import pkg from './package.json';

const inputPath = 'src/index.ts';

const external = [
  'react',
  'react-dom',
  'prop-types',
  'highlight.js'
];

const globals = {
  react: "React",
  "prop-types": "PropTypes"
}

const name = "@stefanlazarevic/library";

const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");
const umdExtension = pathToFile => pathToFile.replace(/\.js$/, ".umd.js");

export default [
  {
    input: inputPath,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [sass({ insert: true }), typescript()],
    external
  },
  {
    input: inputPath,
    output: {
      file: minifyExtension(pkg.main),
      format: "cjs"
    },
    plugins: [sass({ insert: true }), typescript(), uglify()],
    external
  },
  {
    input: inputPath,
    output: {
      file: umdExtension(pkg.main),
      name,
      format: 'umd',
      globals
    },
    plugins: [sass({ insert: true }), typescript()],
    external,
  },
  {
    input: inputPath,
    output: {
      file: minifyExtension(umdExtension(pkg.main)),
      name,
      format: 'umd',
      globals
    },
    plugins: [sass({ insert: true }), typescript(), uglify()],
    external,
  },
]