const path = require('path');

module.exports = {
  // Other configuration settings
  module: {
    rules: [
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
      // Other rules
    ]
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/Assets')
    }
  }
};
