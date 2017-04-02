const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");

var config = {
    entry: [
        './src/index'
    ],
    output: {
        filename: 'static/js/app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.png$/,
            loader: 'url?limit=10000'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "static/css/styles.css"
        }),
    ],
    devtool: "source-map"
};

if (process.env.NODE_ENV !== 'production') {
    //
    // Development
    //
    config.devtool = 'inline-source-map';
    config.entry = [
        './src/index'
    ];
    config.module.loaders.push({
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                "css-loader?sourceMap=true",
                "postcss-loader",
                "sass-loader?sourceMap=true",
                "import-glob-loader"
            ]
        })
    });
    config.plugins = config.plugins.concat([
        new webpack.NoEmitOnErrorsPlugin()
    ]);
} else {
    //
    // Production
    //
    config.devtool = '';
    config.entry = ['./src/index'];
    config.module.loaders.push({
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            filename: "style",
            use: [
                "css-loader",
                "postcss-loader",
                "sass-loader?outputStyle=compressed",
                "import-glob-loader"
            ]
        })
    });
    config.plugins = config.plugins.concat([
        new webpack.optimize.AggressiveMergingPlugin(),
        new BabiliPlugin()
    ]);
}

// Hide deprecation notices
process.noDeprecation = true;

module.exports = config;