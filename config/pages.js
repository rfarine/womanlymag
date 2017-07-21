const issue = {
  query: `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              type
              number
              path
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


// TODO for article:
// thumbnail
// images
// video
// audio
// text
// resources

const article = {
  query: `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              type
              slug
              path
              title
              featured
              tags {
                id
              }
            }
          }
        }
      }
    }
  `,
  type: 'article',
};

module.exports = [
  issue,
  article,
];
