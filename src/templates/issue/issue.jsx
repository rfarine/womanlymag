import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../gatsby-config.js';

// Components
import Thumbnail from '../../components/thumbnail/thumbnail';

// Style
import style from './issue.module.scss';

const Issue = ({ data }) => {
  const issue = data.markdownRemark.frontmatter;

  return (
    <div>
      <Helmet
        title={`${issue.title} | ${config.siteMetadata.title}`}
      />

      <h1>Issue #{issue.number} {issue.title}</h1>

      {
        issue.featured &&
        <h2>Current Issue!</h2>
      }

      <div className={style.articlesGrid}>
        {
          issue.articles &&
          issue.articles.map((article) => {
            <Thumbnail
              backgroundImageUrl={article.thumbnail && article.thumbnail.url}
              text={article.title}
              url={`articles/${article.slug}`}
            />
          })
        }
      </div>
    </div>
  )
};

export default Issue;

export const pageQuery = graphql`
  query IssueByNumber($number: Int!) {
    markdownRemark(frontmatter: { number: { eq: $number } }) {
      frontmatter {
        number
        title
        featured
        articles {
          id
          text
        }
      }
    }
  }
`
