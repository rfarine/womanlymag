import React from 'react';

const Index = ({ data }) => {
  const index = data.markdownRemark.frontmatter;
  console.log('index', index)

  return (
    <div>
      <div>
        <h1>hey guys</h1>
        hey hey
      </div>
    </div>
  )
};

export default Index;

export const pageQuery = graphql`
  query IndexByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
        heroImage
        issue {
          number
          articles {
            slug
            text
            thumbnail {
              url
            }
            title
          }
        }
      }
    }
  }
`
