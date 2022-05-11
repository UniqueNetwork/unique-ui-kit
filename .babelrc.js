module.exports = {
    plugins: ['@babel/plugin-transform-runtime'],
    presets: [
        '@babel/preset-env',
        '@babel/typescript',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
    ],
};
