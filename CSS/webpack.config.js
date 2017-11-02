var ReloadPlugin = require('reload-html-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    },
    plugins: [
    new ReloadPlugin(),
    new HtmlWebpackPlugin({
      template: './flexbox.html'
    })
    ]
};
