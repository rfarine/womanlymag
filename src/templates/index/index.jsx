import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../gatsby-config.js';

const Index = ({ data }) => {
  const index = data.markdownRemark.frontmatter;
  console.log('index', index)

  return (
    <div>
      <Helmet
        title={config.siteMetadata.title}
      />

      hey guys.
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
