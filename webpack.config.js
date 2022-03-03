const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
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
                test: /\.scss$|\.sass$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insert: (element) => {
                                const parent = document.querySelector('head');
                                var last =
                                    window._lastElementInsertedByStyleLoader;
                                if (!last) {
                                    parent.insertBefore(
                                        element,
                                        parent.firstChild
                                    );
                                } else if (last.nextSibling) {
                                    parent.insertBefore(
                                        element,
                                        last.nextSibling
                                    );
                                } else {
                                    parent.appendChild(element);
                                }
                                window._lastElementInsertedByStyleLoader =
                                    element;
                            }
                        }
                    },
                    'css-loader',
                    'sass-loader'
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
            favicon: './public/favicon.png',
            minify: true
        })
    ]
};
