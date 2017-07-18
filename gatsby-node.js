const Promise = require('bluebird');
const path = require('path');
const webpackLodashPlugin = require('lodash-webpack-plugin');
const pageCreator = require('./config/pageCreator');
const pages = require('./config/pages');

require('dotenv-safe').load();

exports.createPages = ({ graphql, boundActionCreators }) => {
  return pageCreator(
    graphql,
    boundActionCreators,
    pages
  );
}

// Add custom url pathname for issues
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === ``) {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case `build-javascript`:
      config.plugin(`Lodash`, webpackLodashPlugin, null);

      break
  }

  return config;
}
