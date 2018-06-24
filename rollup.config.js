const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const { uglify, } = require('rollup-plugin-uglify')

const env = process.env.NODE_ENV

const config = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: '@mono/warn',
    sourcemap: true,
  },
  plugins: [
    babel({
      include: '**/src/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs(),
  ],
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  )
}

export default config
