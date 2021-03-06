const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'https://poc-mfe-list.vercel.app/',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new ModuleFederationPlugin({
      name: 'list',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Discover': './src/containers/Discover/index.jsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/favicon.ico' },
        { from: 'public/logo192.png' },
        { from: 'public/logo512.png' },
        { from: 'public/manifest.json' },
        { from: 'public/robots.txt' },
        {
          from: 'public/assets/git.webp',
          to: 'assets/',
        },
        {
          from: 'public/assets/in.webp',
          to: 'assets/',
        },
      ],
    }),
  ],
};
