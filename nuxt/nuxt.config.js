import PnpWebpackPlugin from "pnp-webpack-plugin";

module.exports = {
  build: {
    transpile: /@fullcalendar.*/,
    extend(config) {
      config.resolve.plugins.push(PnpWebpackPlugin);
      config.resolveLoader.plugins.push(PnpWebpackPlugin.moduleLoader(module));
    }
  }
};
