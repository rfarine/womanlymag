const path = require('path');
const { templatesPath } = require('./paths');

module.exports = (graphql, boundActionCreators, options) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(options.query).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve(path.join(templatesPath, `${options.type}/${options.type}.jsx`)),
            context: node.frontmatter,
          })
        })
      })
    )
  });
};
