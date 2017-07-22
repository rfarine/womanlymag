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

const article = {
  query: `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              type
              slug
              title
              featured
              tags {
                id
                seoMetaTags {
                  tagName
                  content
                }
              }
              thumbnail
              images {
                id
                image {
                  url
                }
                caption
                title
              }
              video {
                url
                thumbnailUrl
              }
              audio
              text
              resources {
                title
                url
                description
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
