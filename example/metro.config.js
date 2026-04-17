const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withMetroConfig } = require("react-native-monorepo-config");

const root = path.resolve(__dirname, "..");
const baseConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = withMetroConfig(baseConfig, {
  root,
  dirname: __dirname,
});

module.exports = {
  ...config,
  watchFolders: [
    ...new Set([
      ...(baseConfig.watchFolders ?? []),
      ...(config.watchFolders ?? []),
    ]),
  ],
};
