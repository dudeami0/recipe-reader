const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, "dist"),
    entry: "./index.js",
    mode: "production",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "static"),
    },
    resolve: {
        extensions: [".js"],
    },
};
