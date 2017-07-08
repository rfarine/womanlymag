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

    graphql(
      `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                number
                title
                featured
              }
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }

      // Create issue pages
      result.data.allMarkdownRemark.edges.forEach(edge => {

        console.log('edge is:', edge)
        console.log('edge.node is:', edge.node)
        createPage({
          path: edge.node.frontmatter.number, // required
          component: issueTemplate,
          context: {
            number: edge.node.frontMatter.number,
            title: edge.node.frontMatter.title,
            featured: edge.node.frontMatter.featured,
          },
        });
      });

      resolve();
    });
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
