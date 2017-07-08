const Promise = require('bluebird');
const { resolve, join } = require('path');
const webpackLodashPlugin = require('lodash-webpack-plugin');

const {
  componentsPath,
  imagesPath,
  nodeModulePath,
  pagesPath,
  stylesPath,
  templatesPath,
  utilsPath,
} = require('./config/paths');

require('dotenv-safe').load();

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const issueTemplate = resolve(join(templatesPath, 'issue/issue.jsx'));

    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          console.log('node......', node)
          console.log('node.frontmatter.path', node.frontmatter.path)
          createPage({
            path: node.frontmatter.path,
            component: issueTemplate,
            // In your issue template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path: node.frontmatter.path,
            }
          })
        })
      })
    )
  });
}

// // Add custom url pathname for issues
// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
//   const { createNodeField } = boundActionCreators;

//   if (node.internal.type === `File`) {
//     const parsedFilePath = path.parse(node.absolutePath);
//     const slug = `/${parsedFilePath.dir.split(`---`)[1]}/`;

//     createNodeField({ node, name: `slug`, value: slug });
//   } else if (
//     node.internal.type === `MarkdownRemark` &&
//     typeof node.slug === `undefined`
//   ) {
//     const fileNode = getNode(node.parent);

//     createNodeField({
//       node,
//       name: `slug`,
//       value: fileNode.fields.slug,
//     });
//   }
// }

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case `build-javascript`:
      config.plugin(`Lodash`, webpackLodashPlugin, null)

      break
  }

  config.loader('svg',
    {
      test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }
  );

  config.merge({
    resolve: [
      componentsPath,
      imagesPath,
      nodeModulePath,
      pagesPath,
      stylesPath,
      utilsPath,
    ],
  });

  return config;
}
