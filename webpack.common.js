const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/function.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        use: [{
          loader: "file-loader",
        }, ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{
          from: path.resolve(__dirname, "./src/media"),
          to: path.resolve(__dirname, "./dist/media"),
        },
        {
          from: path.resolve(__dirname, "./src/page"),
          to: path.resolve(__dirname, "./dist/page"),
        },
        {
          from: "./src/styles/wisata.css",
          to: "./wisata.css",
        },
        {
          from: "./src/styles/about-us.css",
          to: "./about-us.css",
        },
      ],
    }),
  ],
};
