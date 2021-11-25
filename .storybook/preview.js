const tokenContext = require.context(
    '!!raw-loader!../src/assets/tokens',
    true,
    /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
    return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    designToken: {
        defaultTab: 'Colors',
        files: tokenFiles,
        styleInjection:
            '@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");'
    }
};
