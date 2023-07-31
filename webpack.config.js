/* eslint-disable */
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const nunjuckspages = require("./nunjuckspages");
const CssUrlRelativePlugin = require("css-url-relative-plugin");
module.exports = (env) => {
  const devMode = !env || !env.production;

  return {
    mode: devMode ? "development" : "production",
    entry: {
      vendor: "./src/vendor.js",
      main: "./src/index.js",
      index: "./src/ts/index.ts",
      adminLoginEmail: "./ts/adminLogin.ts",
      adminLoginOtp: "./ts/adminLogin-otp.ts",
      inputFile: "./ts/input-file.ts",
      createUserImage: "./ts/create-user-image.ts",
      handleValueBar: "./ts/handle-value-bar.ts",
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "assets/js/[name].js",
      library: "[name]Module",
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true, url: false },
            },
            { loader: "postcss-loader", options: { sourceMap: true } },
            // { loader: "resolve-url-loader" },
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
        },
        // {
        //   test: /\.ts(x?)$/,
        //   enforce: "pre",
        //   exclude: /node_modules/,
        //   use: [
        //     {
        //       loader: "eslint-loader",
        //       options: {
        //         options: {
        //           eslintPath: path.join(__dirname, "src/ts/"),
        //         },
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              query: {
                presets: ["@babel/preset-env"],
              },
            },
            {
              loader: "ts-loader",
            },
          ],
        },
        // {
        //   enforce: 'pre',
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   loader: 'eslint-loader'
        // },
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/css/fonts/",
              },
            },
          ],
        },
      ],
    },
    stats: {
      colors: true,
    },
    devtool: "source-map",
    plugins: [
      new NunjucksWebpackPlugin({
        templates: nunjuckspages,
      }),

      new CssUrlRelativePlugin(/* options */),
      new MiniCssExtractPlugin({
        filename: "assets/css/[name].css",
      }),
      // new StyleLintPlugin(),
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        server: { baseDir: ["dist"] },
      }),
      new ExtraWatchWebpackPlugin({
        dirs: ["templates"],
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: "assets/**/*", to: ".", noErrorOnMissing: false }],
      }),
    ],
    optimization: {
      minimize: !devMode,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false,
            },
          },
        }),
      ],
    },
  };
};
