import React from 'react';

const Resources = ({ data }) => {
  const footer = data.markdownRemark.frontmatter;

  return (
    <div>
      Resources here.
    </div>
  )
};

export default Resources;

export const pageQuery = graphql`
  query ResourcesByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
        resource {
          position
          description
          url
          title
        }
      }
    }
  }
`
