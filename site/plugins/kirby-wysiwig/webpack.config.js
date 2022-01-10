const AutoprefixerPlugin = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const Webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = (env) => {
    let DEV = (env && env.dev);
    let hash = (DEV ? '' : '.[hash]');

    let extractSass = new ExtractTextPlugin({
        filename: `index.css`,
    });

    return {
        mode: DEV ? 'development' : 'production',
        devtool: DEV ? 'source-map' : false,
        context: Path.join(__dirname, './src'),
        entry: {
            main: [
                './scss/main.scss',
                './main.js',
            ]
        },
        output: {
            filename: `index.js`,
            path: Path.resolve(__dirname, ''),
            publicPath: '',
        },
        module: {
            rules: [
                {
                    test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|otf|eot)$/i,
                    loader: 'file-loader?hash=sha512&digest=hex&name=[name].[hash].[ext]'
                },  
                {
                    test: /\.scss$/,
                    use: extractSass.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: DEV,
                                    minimize: !DEV,
                                },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: DEV,
                                    plugins: [
                                        AutoprefixerPlugin({
                                            cascade: DEV,
                                            browsers: [
                                                'last 10 versions'
                                            ],
                                        }),
                                    ],
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: DEV,
                                },
                            },
                        ],
                    }),
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader?babelrc=false&cacheDirectory=true',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ],
                        },
                    },
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new CleanWebpackPlugin([
                './assets/build/*',
            ]),
            extractSass,
            new ManifestPlugin(),
        ],
    };
};
