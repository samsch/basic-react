var webpack = require('webpack');
var path = require('path');

const TARGET = process.env.npm_lifecycle_event;
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/main.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
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
