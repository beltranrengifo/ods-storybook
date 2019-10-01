const DisableWarnings = require('./disable-warnings.js')
const maxAssetSize = 1024 * 1024

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.md$/,
      use: [
        { loader: 'html-loader' },
        {
          loader: 'markdown-loader',
          options: {
            smartypants: true
          }
        }
      ]
    },
    {
      test: /\.(html)$/,
      use: { loader: 'html-loader' }
    },
    {
      test: /\.story\.jsx?$/,
      loader: require.resolve('@storybook/source-loader'),
      enforce: 'pre'
    }
  )
  config.plugins.push(new DisableWarnings())

  config.optimization = {
    splitChunks: {
      chunks: 'all',
      minSize: 30 * 1024,
      maxSize: maxAssetSize
    }
  }

  config.performance = {
    maxAssetSize: maxAssetSize
  }

  return config
}
