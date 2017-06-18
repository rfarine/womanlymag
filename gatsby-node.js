const {
  imagesPath,
  pagesPath,
  stylesPath,
  utilsPath,
} = require('config/paths');

exports.modifyWebpackConfig = function(config, stage) {
  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  });

  config.merge({
    resolve: [ imagesPath, pagesPath, stylesPath, utilsPath ],
  });

  return config;
}
