const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/assets/',
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|gif|svg)$/, use: [{ loader: 'file-loader', options: { name: '[name].[hash].[ext]' } }] },
      { test: /\.(woff|woff2|eot|ttf)$/, use: [{ loader: 'url-loader', options: { limit: 10000 } }] },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    splitChunks: { chunks: 'all' },
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: [],
};
