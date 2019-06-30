
module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.md$/,
      use: [
        { loader: 'html-loader' },
        {
          loader: 'markdown-loader',
          options: { pedantic: true }
        }
      ]
    },
    {
      test: /\.(html)$/,
      use: { loader: 'html-loader' }
    },
    {
      test: /\.story\.jsx?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre'
    }
  )
  return config
}
