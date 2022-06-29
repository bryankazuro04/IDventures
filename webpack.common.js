const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/scripts/function.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
          from: path.resolve(__dirname, "./src/media/"),
          to: path.resolve(__dirname, "./dist/media/"),
        },
        {
          from: path.resolve(__dirname, "./src/page/"),
          to: path.resolve(__dirname, "./dist/page/"),
        },
      ],
    }),
  ],
};
