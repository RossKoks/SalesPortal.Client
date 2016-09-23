const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "source-map" : null,
    entry: "./index.tsx",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [{ test: /\.tsx?$/, loader: "ts-loader" }],
        preLoader: [{ test: /\.js$/, loader: "source-map-loader" }]
    },
    output: {
        path: __dirname + "/src/",
        filename: "bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}