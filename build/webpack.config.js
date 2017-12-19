const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  cache: true,
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      components: path.join(__dirname, '../src/components'),
      pages: path.join(__dirname, '../src/pages'),
      localData: path.join(__dirname, '../src/testdata/localdata'),
      util: path.join(__dirname, '../src/utils'),
      jquery: path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=1024&name=images/[name].[hash:8].[ext]']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
      // 单独使用.scss
      // {
      //   test: /\.scss$/,
      //   use: [{
      //     loader: 'style-loader' // 将 JS 字符串生成为 style 节点
      //   }, {
      //     loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
      //   }, {
      //     loader: 'sass-loader' // 将 Sass 编译成 CSS
      //   }]
      // }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true
    })
  ]
};

module.exports = webpackConfig;
