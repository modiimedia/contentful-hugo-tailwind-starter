/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const { join } = require('path');
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./hugo_stats.json', './typescript/**/*.ts'],
    extractors: [
        {
            extractor: (content) => {
                const els = JSON.parse(content).htmlElements;
                return els.tags.concat(els.classes, els.ids);
            },
            extensions: ['json'],
        },
    ],
});

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [__dirname],
        }),
        require('tailwindcss')(join(__dirname, 'tailwind.config.js')),
        require('autoprefixer')({
            grid: true,
            browsers: ['>1%'],
        }),
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []),
    ],
};
