const DisableWarnings = require('./disable-warnings.js')

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.md$/,
      use: [
        { loader: 'html-loader' },
        {
          loader: 'markdown-loader',
          options: {}
        }
      ]
    },
    {
      test: /\.(html)$/,
      use: { loader: 'html-loader' }
    },
    {
      test: /\.story\.jsx?$/,
      loader: require.resolve('@storybook/addon-storysource/loader'),
      options: {
        uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
      },
      enforce: 'pre'
    }
  )
  config.plugins.push(new DisableWarnings())

  return config
}
