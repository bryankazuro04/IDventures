const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/scripts/function.js"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/media/"),
          to: path.resolve(__dirname, "./dist/media/"),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: "IDventures",
      short_name: "IDventures",
      description:
        "Website untuk mencari dan menemukan tempat wisata yang sangat unik dan jarang diketahui banyak orang",
      background_color: "#eeeeee",
      theme_color: "#8edeeb",
      crossorigin: "use-credentials",
      filename: "manifest.json",
      icons: [
        {
          src: path.resolve("src/media/icons/favicon-16.png"),
          size: "16x16",
          type: "image/png",
        },
        {
          src: path.resolve("src/media/icons/favicon-32.png"),
          size: "32x32",
          type: "image/png",
        },
        {
          src: path.resolve("src/media/icons/favicon-96.png"),
          size: "96x96",
          type: "image/png",
        },
        {
          src: path.resolve("src/media/icons/favicon-192.png"),
          size: "192x192",
          type: "image/png",
        },
      ],
    }),
    new GenerateSW({
      swDest: "./sw.bundle.js",
      maximumFileSizeToCacheInBytes: 5000000,
    }),
  ],
};
