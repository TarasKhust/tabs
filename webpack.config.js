let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

let SRC_DIR = path.resolve(__dirname,'src');
let DIST_DIR = path.resolve(__dirname, 'dist');
let ASSET_PATH = process.env.ASSET_PATH || '';

let conf = {
    entry: {
        app: './app.js',
        ajax: './app2.js',
    },
    output: {
        path: DIST_DIR,
        filename: '[name].bundle.js',
        publicPath: ASSET_PATH
    },
    resolve: {
        modules: [SRC_DIR, "node_modules"],
        extensions: ['.js', '.css', '.scss']
    },
    devtool: 'eval-source-map',
    devServer: {
        overlay: {
            warning: true,
            errors: true,
        },
        // contentBase: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.jade$/,
                use: 'jade-loader'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node_modules/'
                query: {
                    presets: ['es2015']
                }
            },
            {   test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap'],
                    // publicPath: '../'
                })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','sass-loader'],
                    // publicPath: '../'
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','stylus-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','less-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [
                    'file-loader?name=[path][name].[ext]',
                    // 'file-loader?name=[name].[ext]&outputPath=../images/&publicPath=.images/',
                    'image-webpack-loader'
                ]
            },
            // {
            //     test: /\.svg$/,
            //     loader: 'svg-inline-loader'
            // },
            {
                test: /\.(svg)$/,
                use: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.(woff2?|ttf|eot|otf)$/,
                use: 'file-loader?name=fonts/[name].[ext]'
            },
        ]
    },
    node: {
        console: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Index',
            template: './index.html',
            hash: true,
            excludeChunks: ['ajax'],
            // chunks:['index'],
            // minify: {
            //     collapseWhitespace: true
            // },
        }),

        new HtmlWebpackPlugin({
            title: 'Ajax',
            template: './ajax.html',
            hash: true,
            filename: 'ajax.html',
            chunks: ['ajax'],
            // minify: {
            //     collapseWhitespace: true },
        }),

        // new CopyWebpackPlugin(
        //      [
        //          { from: 'lesson5/img', to: 'img' }
        //      ],
        //      {
        //          ignore: [
        //              {glob: 'svg/*'},
        //          ]
        //      }
        //  ),

        new ExtractTextPlugin({
            filename: 'css/style.css',
            disable: false,
            allChunks: true
        }),


        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),

    ],
};

module.exports = (env, options) => {
    let production = options.mode === 'development';

    conf.devtool = production
        ? 'source-map'
        : 'evel-sourcemap';

    return conf;
};