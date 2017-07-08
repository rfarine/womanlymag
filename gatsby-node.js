const {
  imagesPath,
  nodeModulePath,
  pagesPath,
  stylesPath,
  utilsPath,
} = require('config/paths');

require('dotenv-safe').load();

exports.modifyWebpackConfig = function(config, stage) {
  config.loader('svg',
    {
      test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }
  );

  config.merge({
    resolve: [ imagesPath, nodeModulePath, pagesPath, stylesPath, utilsPath ],
  });

  return config;
}
