module.exports = {
  use: [
    '@neutrinojs/react-components',
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
          console.log(options)
          return options
        })
    },
  ],
}
