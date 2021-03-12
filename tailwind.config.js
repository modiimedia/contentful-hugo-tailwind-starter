module.exports = {
  theme: {},
  darkMode: false,
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './layouts/**/*.html',
      './assets/**/*.ts',
      './assets/**/*.scss',
      './assets/**/*.css',
    ],
  },
};
