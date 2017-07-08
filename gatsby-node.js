const Promise = require('bluebird');
const path = require('path');
const webpackLodashPlugin = require('lodash-webpack-plugin');

const { templatesPath } = require('./config/paths');

require('dotenv-safe').load();

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const issueTemplate = path.resolve(path.join(templatesPath, 'issue/issue.jsx'));

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
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: issueTemplate,
            // In your issue template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path: node.frontmatter.path,
              number: node.frontmatter.number,
              title: node.frontmatter.title,
              featured: node.frontmatter.featured,
              articles: node.frontmatter.articles,
            }
          })
        })
      })
    )
  });
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
