// craco.config.js
const tail = {
    style: {
      postcss: {
        plugins: [
          import ('tailwindcss'),
          import ('autoprefixer'),
        ],
      },
    },
  };
export default tail;
