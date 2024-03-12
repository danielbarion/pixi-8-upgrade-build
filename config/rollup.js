/* eslint-disable n/no-path-concat */

/**
 * Rollup configs
 */

const aliasConfig = {
  modules: `${__dirname}/src/modules`,
  components: `${__dirname}/src/components`,
  utils: `${__dirname}/src/utils`,
  assets: `${__dirname}/assets`,
  svgs: `${__dirname}/src/svgs`,
  state: `${__dirname}/src/state`,
}

const copyConfig = {
  targets: [
    { src: 'assets', dest: 'build/' },
    { src: 'public/manifest.json', dest: 'build/' },
    // { src: 'public/service-worker.js', dest: 'build/'},
    { src: 'public/offline.html', dest: 'build/' },
  ],
  verbose: true,
}

const outputConfig = {
  umd: {
    htmlFileName: 'app.js',
    outputConfig: {
      file: `build/app.js`,
      format: 'umd',
      sourcemap: true,
    },
  },
  esm: {
    htmlFileName: 'index.js',
    outputConfig: {
      dir: 'build',
      format: 'esm',
      sourcemap: true,
      paths: {
        // '@pixi/core': 'https://cdn.skypack.dev/@pixi/core',
        // '@pixi/display': 'https://cdn.skypack.dev/@pixi/display',
      },
    },
  },
}

/**
 * Export all Rollup
 * configs as a single object
 */
export { aliasConfig, copyConfig, outputConfig }
