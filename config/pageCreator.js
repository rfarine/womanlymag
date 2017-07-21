const path = require('path');
const { templatesPath } = require('./paths');

module.exports = (graphql, boundActionCreators, pages) => {
  const { createPage } = boundActionCreators;

  return pages.map((page) => {
    return new Promise((resolve, reject) => {
      // Query for markdown nodes to use in creating pages.
      resolve(
        graphql(page.query).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          // Create pages for each markdown file.
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            if (node.frontmatter.type === page.type) {
              createPage({
                path: node.frontmatter.path,
                component: path.resolve(path.join(templatesPath, `${page.type}/${page.type}.jsx`)),
                context: node.frontmatter,
              });
            }
          })
        })
      )
    });
  });
};
