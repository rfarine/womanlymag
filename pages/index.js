import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

const Index = () => {
  return (
    <div>
      <Helmet
        title={config.siteTitle}
        meta={[
          {"name": "description", "content": "Art & Health on the Global Woman and Non-Binary"},
          {"name": "keywords", "content": "women, woman, health, art, global, non-binary, magazine"},
        ]}
      />
      <h1>
        Hello World!
      </h1>
      <p>Welcome to your new clean Gatsby site</p>
    </div>
  );
}

export default Index;
