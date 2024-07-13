// config-overrides.js
module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });
  
    config.ignoreWarnings = config.ignoreWarnings || [];
    config.ignoreWarnings.push({
      module: /@mediapipe\/tasks-vision/
    });
  
    return config;
  };
  