// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json',
        customize(key, value, originalValue) {
          const newKey = key.key.replace('app', 'main');
          return {
            key: newKey,
            value: key.value,
          };
        },
      }),
    );
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
