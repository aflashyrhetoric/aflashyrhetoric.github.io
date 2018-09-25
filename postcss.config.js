var defaultPlugins = [
  require("autoprefixer")({ browsers: "last 2 version" }),
  require("css-mqpacker")({ sort: true })
];
var additionalPluginsForProduction = [
  require("postcss-csscomb"),
  require("postcss-csso")
];

module.exports = {
  plugins:
    process.env.NODE_ENV !== "production"
      ? defaultPlugins
      : defaultPlugins.concat(additionalPluginsForProduction)
};
