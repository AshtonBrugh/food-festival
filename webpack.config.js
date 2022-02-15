const path = require("path");
const webpack = require("webpack");
const BuildAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
    entry: {
      app: "./assets/js/script.js",
      events: "./assets/js/events.js",
      schedule: "./assets/js/schedule.js",
      tickets: "./assets/js/tickets.js"
    },
    output: {
       filename: "[name].bundle.js",
       path: __dirname + "/dist",
    },
    module: {
      rules: [
        {
          test: /\.jpg$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                name (file) {
                  return "[path][name].[ext]"
                },
                publicPath: function(url) {
                  return url.replace("../", "/assets/")
                }
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
      ]
    },
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new BuildAnalyzerPlugin({
            analyzerMode: "static", //the report outputstt to an HTML file in the dist folder
        })
      ],
    mode: 'development'
};

module.exports = config;