// Webpack
const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const cssnano = require('cssnano');

// Hide deprecation notices
process.noDeprecation = true;

let config = {};

const devMode = process.NODE_ENV !== "production";

module.exports = (env, argv) => {
  config = {
    mode: "development",
    devtool: "inline-source-map",
    entry: ["./src/index"],
    output: {
      filename: "static/js/app.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [["@babel/preset-env"]],
              },
            },
          ],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: "url-loader?limit=100000",
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            warnings: false,
          },
          sourceMap: true,
        }),
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".scss"],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "static/css/styles.css",
      }),
    ],
    watchOptions: {
      ignored: /node_modules/,
    },
  };

  if (devMode) {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sourceMapContents: false,
            },
          },
          {
            loader: "import-glob-loader",
          },
        ],
      }
    );
  }

  if (!devMode) {
    //
    // Development
    //
    config.devtool = "";
    config.optimization = {
      minimize: true,
    };
    config.plugins = config.plugins.concat([
      new webpack.NoEmitOnErrorsPlugin(),
    ]);
  }

  return config;
};
