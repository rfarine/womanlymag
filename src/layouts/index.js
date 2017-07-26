import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-responsive-grid';
import { rhythm } from '../utils/typography';
import config from '../../gatsby-config.js';
import '../css/index.module.scss';

const Template = ({ children }) => {
  return (
    <div>
      <Helmet title={config.siteMetadata.title}>
        <link href="https://fonts.googleapis.com/css?family=Yantramanav:100,400,700,900" rel="stylesheet" />
      </Helmet>

      <Container
        style={{
          maxWidth: 960,
          padding: `${rhythm(1)} ${rhythm(3/4)}`,
          paddingTop: 0,
        }}
      >
        {children()}
      </Container>
    </div>
  )
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
