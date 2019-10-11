const path = require('path');
module.exports = {
    entry: {
        //general: './src/general.js',
        main: './src/index.js',
        //schelkovo: './src/schelkovo.js',
        //mozaika: './src/mozaika.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    devServer: {
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            }
        ],
    }
};