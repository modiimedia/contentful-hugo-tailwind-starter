module.exports = {
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    endOfLine: 'auto',
    overrides: [
        {
            files: ['*.html'],
            options: {
                parser: 'go-template',
            },
        },
    ],
};
