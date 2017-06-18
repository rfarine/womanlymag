import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import SVG from 'react-inlinesvg';
import { config } from 'config';
import style from 'css/index.module.scss';

const Index = () => {
  return (
    <div>
      <Helmet
        title={config.siteTitle}
        meta={[
          {
            'name': 'description',
            'content': 'Art & Health on the Global Woman and Non-Binary',
          },
          {
            'name': 'keywords',
            'content': 'women, woman, health, art, global, non-binary, magazine',
          },
        ]}
      />
      <div className={style.container}>
        <div className={style.logo}>
          <SVG src="images/logo.svg" />
        </div>
      </div>
    </div>
  );
}

export default Index;
