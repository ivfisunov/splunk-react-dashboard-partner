const path = require("path");
require("babel-polyfill");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index_bundle.js",
    libraryTarget: 'amd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            // name: '[name].[ext]',
            outputPath: "./resources",
            publicPath: '/static/app/reactapp3/dist/resources'
          }
        }]
      }
    ]
  }
};