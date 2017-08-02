import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-responsive-grid';
import { rhythm } from '../utils/typography';
import config from '../../gatsby-config.js';

// Components
import Page from '../components/page/page';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

// Styles
import '../css/index.scss';

const Template = ({ children }) => {
  return (
    <div>
      <Helmet title={config.siteMetadata.title}>
        <link href="https://fonts.googleapis.com/css?family=Yantramanav:100,400,700,900" rel="stylesheet" />
        <script src="https://use.fontawesome.com/ee09daa2a2.js"></script>
      </Helmet>

      <Header />

      <Container style={{ maxWidth: 960 }}>
        <Page>
          {children()}
        </Page>
      </Container>

      <Footer />
    </div>
  )
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
