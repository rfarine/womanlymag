import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../gatsby-config.js';

// Style
import style from './about.module.scss';

const About = ({ data }) => {
  const aboutPage = data.markdownRemark.frontmatter;

  return (
    <div>
      <Helmet
        title={`${aboutPage.title} | ${config.siteMetadata.title}`}
      />
    </div>
  )
};

export default About;

export const pageQuery = graphql`
  query AboutPageByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        type
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
`
