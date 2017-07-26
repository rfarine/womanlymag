import React from 'react';

// Components
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Index = ({ data }) => {
  const index = data.markdownRemark.frontmatter;
  console.log('index', index)

  return (
    <div>
      <Header />

      <div>
        <h1>hey guys</h1>
        hey hey
      </div>

      <Footer />
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
