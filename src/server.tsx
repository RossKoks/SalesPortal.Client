import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as express from "express";
import { Provider } from 'react-redux';
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const app = express();

if (process.env.NODE_ENV !== "production") {
    const webpack = require("webpack");
    const webpackConfig = require("../webpack.config.js");
    const webpackCompiler = webpack(webpackConfig);
}