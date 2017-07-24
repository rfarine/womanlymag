import React, { PropTypes } from 'react';
import { Container } from 'react-responsive-grid';
import { rhythm } from '../utils/typography';

const Template = ({ children }) => {
  return (
    <div>
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
