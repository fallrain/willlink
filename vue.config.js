const env = process.env.NODE_ENV_MODE;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const path = require('path');

const smp = new SpeedMeasurePlugin();
module.exports = {
  publicPath: env === 'prod' ? '/manage/' : '/',
  devServer: {
    host: '0.0.0.0',
    port: 8094,
    compress: true,
    proxy: {
      '/vipcenter': {
        target: 'http://testvip.haier.net/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: (config) => {
    const cfg = {
    };
    if (env !== 'dev') {
      return smp.wrap(cfg);
    }
    return cfg;
  }
};
