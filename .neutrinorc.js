module.exports = {
  use: [
    '@neutrinojs/react-components',
    '@neutrinojs/jest',
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
