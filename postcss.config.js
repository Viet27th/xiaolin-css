/**
 * https://www.npmjs.com/package/postcss-cli
 */

module.exports = (ctx) => {
  return {
    map: ctx.options.map,
    plugins: [
      require("autoprefixer")()
    ]
  };
}