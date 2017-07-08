import React from 'react';
import Helmet from 'react-helmet';

// Components
import Thumbnail from '../../components/thumbnail/thumbnail';

// Style
import style from './issue.module.scss';

const Issue = ({ data }) => {
  const issue = data.markdownRemark.frontmatter;

  return (
    <div>
      <Helmet
        title={`${issue.title} | Womanly Mag | Art & Health on the Global Woman and Non-Binary`}
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

