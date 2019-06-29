module.exports = async ({ config, mode }) => {
  console.dir(config.plugins, { depth: null })

  config.module.rules.push(
    {
      test: /\.md$/,
      use: [
        { loader: 'html-loader' },
        {
          loader: 'markdown-loader',
          options: {
            /* your options here */
          }
        }
      ]
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader'
      }
    }
  )
  return config
}
