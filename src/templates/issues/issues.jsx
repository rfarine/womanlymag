import React from 'react';

const Issues = ({ data }) => {
  const footer = data.markdownRemark.frontmatter;

  return (
    <div>
      Issues here.
    </div>
  )
};

export default Issues;

export const pageQuery = graphql`
  query IssuesByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
        issues {
          number
          position
          featured
          title
        }
      }
    }
  }
`
