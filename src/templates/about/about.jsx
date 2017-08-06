import React from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import config from '../../../gatsby-config.js';
import ContactForm from '../../components/contactForm/contactForm';
import Contributor from '../../components/contributor/contributor';
// Style
import style from './about.module.scss';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

function renderContributors(aboutPage) {
  const contributors = _.map(aboutPage.contributors, (contributor) => {
    return (
      <li key={contributor.name}>
        <Contributor
          bio={contributor.bio}
          imageUrl={contributor.image.url}
          name={contributor.name}
          socialMediaLinks={contributor.socialMediaLinks}
          title={contributor.title}
        />
      </li>
    );
  });

  return (
    <ul>
      {contributors}
    </ul>
  );
}

const About = ({ data }) => {
  const aboutPage = data.markdownRemark.frontmatter;

  return (
    <div>
      <Helmet
        title={`${aboutPage.title} | ${config.siteMetadata.title}`}
      />
      <div className={style.intro}>
        <div className={style.text}>
          <h1 className={style.header}>About</h1>
          {md.render(aboutPage.text)}
        </div>

        <div className={style.form}>
          <h2 className={style.header}>Contact</h2>
          <ContactForm />
        </div>
      </div>

      <div className={style.bios}>
        <h2 className={style.header}>Bios</h2>
        {renderContributors(aboutPage)}
      </div>
    </div>
  )
};

export default About;

export const pageQuery = graphql`
  query AboutPageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        type
        path
        title
        text
        contributors {
          position
          name
          bio
          title
          seoMetaTags {
            tagName
            content
          }
          socialMediaLinks {
            position
            url
            service
          }
          image {
            url
          }
        }
      }
    }
  }
`
