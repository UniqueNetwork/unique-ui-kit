const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'unique-ui.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'Unique',
            type: 'umd'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        host: '127.0.0.1',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css?$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.scss$|\.sass$/,
                use: [
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            implementation: require('node-sass'),
                            sassOptions: {
                                precision: 8,
                                outputStyle: 'expanded'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.png'
        }),
        new MiniCssExtractPlugin()
    ]
};
