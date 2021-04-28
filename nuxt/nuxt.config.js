// this import is only needed if using Yarn Plug-n-Play
// will be unnecessary when nuxt internally upgrades to webpack 5
import PnpWebpackPlugin from "pnp-webpack-plugin";

module.exports = {
  build: {
    transpile: /@fullcalendar.*/, // always needed

    // this `extend` callback is only needed if using Yarn Plug-n-Play
    extend(config) {
      config.resolve.plugins.push(PnpWebpackPlugin);
      config.resolveLoader.plugins.push(PnpWebpackPlugin.moduleLoader(module));
    }
  }
};
