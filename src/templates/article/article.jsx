import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../gatsby-config.js';

// Style
// import style from './article.module.scss';

const Article = ({ data }) => {
  const article = data.markdownRemark.frontmatter;

  return (
    <div>
      <Helmet
        title={`${article.title} | ${config.siteMetadata.title}`}
      />

      <h1>{article.title}</h1>
      <h2>{article.slug}</h2>
    </div>
  )
};

export default Article;

export const pageQuery = graphql`
  query ArticleByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        type
        slug
        title
        featured
        tags {
          id
        }
      }
    }
  }
`
