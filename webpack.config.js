let path = require('path');

let APP_DIR = path.resolve(__dirname, 'src/client/app');
let BUILD_DIR = path.resolve(__dirname, 'src/client/build');

let config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: "babel-loader",
            query: {
                presets: ['react']
            }
        }]
    }
};

module.exports = config;
