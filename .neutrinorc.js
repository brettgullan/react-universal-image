module.exports = {
  use: [
    '@neutrinojs/react-components',
    [
      '@neutrinojs/jest',
      {
        // setup script for the framework
        setupTestFrameworkScriptFile: './test/setup.js',
        // and / or shims
        setupFiles: ['./test/shim.js'],
      },
    ],
    (neutrino) => {
      neutrino.config.module
        .rule('compile')
        .use('babel')
        .tap((options) => {
          const babelStyledComponentsPlugin = [
            require.resolve('babel-plugin-styled-components'),
            {},
          ]
          options.plugins.push(babelStyledComponentsPlugin)
          return options
        })
    },
  ],
}
