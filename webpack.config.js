const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/');

const config = {
    entry: ['babel-polyfill', APP_DIR + '/main.js'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                use : 'babel-loader',
            }
        ]
    },
    plugins: [],
};

module.exports = config;
