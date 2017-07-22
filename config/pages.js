const about = {
  query: `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              title
              contributors {
                position
                name
                email
                bio
                seoMetaTags {
                  tagName
                  content
                }
                socialMediaLinks {
                  position
                  url
                  service
                  seoMetaTags {
                    tagName
                    attributes {
                      name
                      content
                    }
                  }
                }
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
  type: 'about',
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

module.exports = [
  about,
  article,
  issue,
];
