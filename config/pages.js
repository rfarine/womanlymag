const issue = {
  query: `
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
  `,
  type: 'issue',
};

module.exports = [
  issue,
];
