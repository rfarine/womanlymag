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
        <div className={style.intro}>
          <p>Art & Health on the Global Woman and Non-Binary</p>
          <p>Issue No.1 Out Fall 2017</p>
        </div>
        <form
          action='//twitter.us15.list-manage.com/subscribe/post?u=8f848089b50e1ba3b7a3c400f&amp;id=3fe0717806'
          method='post'
          id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          target='_blank'
        >
          <input
            id='mce-EMAIL'
            type='text'
            name='EMAIL'
            placeholder='Email Address'
            required
          />
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden='true'
          >
            <input
              type='text'
              name='b_8f848089b50e1ba3b7a3c400f_3fe0717806'
              tabIndex='-1'
              value=''
            />
          </div>
          <input
            type='submit'
            name='subscribe'
            id='mc-embedded-subscribe'
          />
        </form>
      </div>
    </div>
  );
}

export default Index;
