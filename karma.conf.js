const webapck = require("webpack");
var webpackConfig = require('./webpack.config');

module.exports = (config) => {
    config.set({
        browser: ["Chrome"],
        singleRun: false,
        frameworks: ["mocha"],
        files: [
            "test/**/*.ts"
        ],
        preprocessors: {
            "test/**/*.ts": ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        autoWatch: true,
        reporters: ['progress', 'html'],
    });
}