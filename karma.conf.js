const webapck = require("webpack");
var webpackConfig = require('./webpack.config');

module.exports = (config) => {
    config.set({
        browser: ["Chrome"],
        singleRun: false,
        frameworks: ["mocha"],
        files: [
            "src/**/*.test.tsx"
        ],
        preprocessors: {
            "src/**/*.test.tsx": ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        autoWatch: true,
        reporters: ['progress', 'html'],
    });
}