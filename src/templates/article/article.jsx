import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import config from '../../../gatsby-config.js';

// Style
// import style from './article.module.scss';

function getTags(tags) {
  const seoTags = _.flatMap(tags, (tag) => {
    return tag.seoMetaTags;
  });

  const titleTags = _.map(
    _.filter(seoTags, { tagName: 'title' }),
    'content'
  );

  return `${titleTags.join(', ')}`;
};

const Article = ({ data }) => {
  const article = data.markdownRemark.frontmatter;

  return (
    <div>
      <Helmet
        title={`${article.title} | ${config.siteMetadata.title}`}
      />

      <h1>{article.title}</h1>
      <h2>{article.slug}</h2>
      <p>{getTags(article.tags)}</p>
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
          seoMetaTags {
            tagName
            content
          }
        }
      }
    }
  }
`
