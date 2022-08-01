const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 70,
          },
        },
      ],
      overrideExtension: true,
    }),
  ],
});
