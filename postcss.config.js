/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const { join } = require('path');

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
    ],
};
