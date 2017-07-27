import React from 'react';
import style from './index.module.scss';

const Index = ({ data }) => {
  const index = data.markdownRemark.frontmatter;
  console.log('index', index)

  return (
    <div>
      <div>
        <div
          className={style.hero}
          style={{ backgroundImage: `url(${index.heroImage})` }}
        />
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
