const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {},
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Password Generator",
      template: path.resolve(__dirname, "src", "assets", "index.html"),
    }),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
