var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: './dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'css-loader!sass-loader' // loaders to preprocess CSS
            )
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            contributors: require('./src/js/contributors'),
            template: './src/index.html.ejs' 
        })
    ]
};