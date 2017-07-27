import React from 'react';
import ImageGrid from '../../components/imageGrid/imageGrid';
import style from './index.module.scss';

const Index = ({ data }) => {
  const index = data.markdownRemark.frontmatter;
  const imageGridItems = index.issue.articles.map((article) => {
    return {
      ...article,
      url: `articles/${article.slug}`,
    };
  });

  return (
    <div>
      <div>
        <div
          className={style.hero}
          style={{ backgroundImage: `url(${index.heroImage})` }}
        />

        <ImageGrid items={imageGridItems} />
      </div>
    </div>
  )
};

export default Index;

export const pageQuery = graphql`
  query IndexByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
        heroImage
        issue {
          number
          articles {
            slug
            text
            thumbnail {
              url
            }
            title
          }
        }
      }
    }
  }
`
