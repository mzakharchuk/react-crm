const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    devtool:'source-map' ,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
              }
        ]   
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin(
            {
                template: path.join(__dirname,'/src/index.html'),
                filename: "./index.html"
            }
        )
    ],
    devServer: {
        contentBase: 'dist',
        hot: true,
        inline: true,
        historyApiFallback: true
    },
}