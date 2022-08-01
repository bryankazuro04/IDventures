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
      maximumFileSizeToCacheInBytes: 3000000,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 50000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: "vendor",
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
