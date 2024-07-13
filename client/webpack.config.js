const path = require('path');

module.exports = {
  // Existing configuration
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // Other rules
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules\/@mediapipe\/tasks-vision/, // exclude problematic package
      }
    ]
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/Assets')
    }
  },
  ignoreWarnings: [
    {
      module: /@mediapipe\/tasks-vision/
    }
  ]
};
