import * as webpack from "webpack";
import * as path from "path";
import Minicss from "mini-css-extract-plugin";
import Htmlp from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import "webpack-dev-server";

type Mode = "development" | "none" | "production";
const mode = (process.env.NODE_ENV || "development") as Mode;
const config: webpack.Configuration = {
  mode,
  devtool: mode === "development" ? "inline-source-map" : false,
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: "3000",
    client: {
      overlay: { errors: true, warnings: true },
    },

    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
  entry: {
    build: path.resolve(__dirname, "src/ts/index.ts"),
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
        include: [path.resolve(__dirname, "src/ts")],
      },

      {
        test: /\.scss$/,
        use: [Minicss.loader, "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "src/style")],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new ESLintPlugin(),
    new Minicss(),
    new Htmlp({
      template: "./src/index.html",
      title: "Pokedex",
      filename: "index.html",
      favicon: "./src/favicon.ico",
    }),
  ],
};

export default config;
