const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './client/src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /tests/],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'BookingModule.bundle.js',
  },
};
