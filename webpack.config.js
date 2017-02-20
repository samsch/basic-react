const webpack = require('webpack');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
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

if(TARGET === 'build') {
    config.plugins.push(
        (new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        }))
    );
}

module.exports = config;
