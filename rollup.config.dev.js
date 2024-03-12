import { aliasConfig, copyConfig, outputConfig } from './config/rollup'
import { string } from 'rollup-plugin-string'
import { version } from './package.json'
import alias from '@rollup/plugin-alias'
import babel from 'rollup-plugin-babel'
import browsersync from 'rollup-plugin-browsersync'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import dotenv from 'dotenv'
import html from 'rollup-plugin-html-scaffold'
import json from '@rollup/plugin-json'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import nodeResolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import replace from '@rollup/plugin-replace'
import ts from '@rollup/plugin-typescript'
import typescript from 'typescript'

dotenv.config({
  path: '.env.development',
})

export default [
  {
    input: ['src/index.ts'],
    output: outputConfig.esm.outputConfig,
    plugins: [
      nodePolyfills(),
      progress(),
      alias({
        resolve: ['.styl', '.css', '.svg', '/index.js'],
        entries: aliasConfig,
      }),
      html({
        input: './public/index.html',
        output: './public/index.html',
        template: { appBundle: outputConfig.esm.htmlFileName },
      }),
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('development'),
          'process.env.APP_ASSETS_URL': JSON.stringify(process.env.APP_ASSETS_URL),
          'process.app.version': version,
          'process.app.enviroment': 'localhost front-end',
        },
      }),
      string({ include: '**/*.html' }),
      ts({
        typescript,
      }),
      json(),
      postcss({
        include: '**/*.css',
        extensions: ['.css', '.sss', '.stylus', '.styl', '.pcss', '.scss'],
      }),
      nodeResolve({
        browser: true,
      }),
      babel(),
      commonjs(),
      copy(copyConfig),
      browsersync({
        server: 'build',
        watch: true,
        ui: false,
        open: false,
        // port: 3000,
        // ui: {
        //   port: 3001,
        // },
      }),
    ],
  },
]
