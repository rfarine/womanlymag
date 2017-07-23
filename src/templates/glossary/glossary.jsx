import React from 'react';

const Glossary = ({ data }) => {
  const footer = data.markdownRemark.frontmatter;

  return (
    <div>
      Glossary here.
    </div>
  )
};

export default Glossary;

export const pageQuery = graphql`
  query GlossaryByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
        definitions {
          position
          description
          title
        }
      }
    }
  }
`
