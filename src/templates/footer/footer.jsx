import React from 'react';

const Footer = ({ data }) => {
  const footer = data.markdownRemark.frontmatter;

  return (
    <div>
      Footer here.
    </div>
  )
};

export default Footer;

export const pageQuery = graphql`
  query FooterByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        links {
          position
          route
          title
        }
        socialMediaLinks {
          position
          url
          service
        }
        contactForm {
          to
          button {
            text
          }
          inputs {
            itemType
            position
            required
            placeholder
            label
          }
        }
      }
    }
  }
`
