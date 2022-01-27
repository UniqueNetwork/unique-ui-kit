const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-interactions', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5'
    },
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
        });
        config.module.rules.push({
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
        });

        return config;
    }
};
