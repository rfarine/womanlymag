const path = require('path');
const { templatesPath } = require('./paths');

module.exports = (graphql, boundActionCreators) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                frontmatter {
                  type
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          if (node.frontmatter.type) {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve(path.join(templatesPath, `${node.frontmatter.type}/${node.frontmatter.type}.jsx`)),
              context: node.frontmatter,
            });
          }
        })
      })
    )
  });
};
