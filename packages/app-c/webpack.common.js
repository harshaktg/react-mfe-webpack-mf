const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'app_c',
      library: { type: 'var', name: 'app_c' },
      filename: 'remoteEntry.js',
      exposes: {
        './BlueContainer': './src/containers/BlueContainer',
        './RedContainer': './src/containers/RedContainer',
      },
      remotes: {
        app_b: 'app_b',
      },
      // shared: {
      //   react: {
      //     eager: true,
      //     singleton: true,
      //   },
      //   'react-dom': {
      //     eager: true,
      //     singleton: true,
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.resolve(__dirname, 'public', 'index.html'),
      // chunks: ['main'],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:3003/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
