const path = require('path');
const pageCreator = require('./config/pageCreator');
require('dotenv-safe').load();

exports.createPages = ({ graphql, boundActionCreators }) => {
  return pageCreator(
    graphql,
    boundActionCreators
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
  // switch (stage) {
    // case 'develop':
    //   config.loader('css', {
    //     include: /flexboxgrid/,
    //   });

    //   break;

    // Prod css builds
    // case 'build-css':
    //   config.loader('css', {
    //     include: /flexboxgrid/,
    //   });

    //   break;

    // Prod HTML pages
    // case 'build-html':
    //   config.loader('css', {
    //     include: /flexboxgrid/,
    //   });

    //   break;

    // Prod js builds
    // case 'build-javascript':
    //   config.loader('css', {
    //     include: /flexboxgrid/,
    //   });

    //   break;
  // }

  return config;
};
