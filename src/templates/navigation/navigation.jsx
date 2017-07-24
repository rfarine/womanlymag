import React from 'react';

const Navigation = ({ data }) => {
  const footer = data.markdownRemark.frontmatter;

  return (
    <div>
      Navigation here.
    </div>
  )
};

export default Navigation;

export const pageQuery = graphql`
  query NavigationByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        links {
          position
          route
          title
        }
      }
    }
  }
`
