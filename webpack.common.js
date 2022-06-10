const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/function.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        use: [{
          loader: "file-loader",
        }, ],
      },
      {
        test: /\.(html)$/,
        include: path.join(__dirname, "src/partials"),
        use: {
          loader: "html-loader",
          options: {
            interpolate: true,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "./dist/index.html"),
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, "./src/media"),
        to: path.resolve(__dirname, "./dist/media"),
      }, ],
    }),
  ],
};
