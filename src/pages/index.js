import React from 'react';
import Helmet from 'react-helmet';
import SVG from 'react-inlinesvg';
import style from '../css/index.module.scss';

const Index = () => {
  return (
    <div>
      <Helmet
        title="Womanly Mag | Art & Health on the Global Woman and Non-Binary"
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
      >
        <script src="https://use.fontawesome.com/ee09daa2a2.js"></script>
      </Helmet>
      <div className={style.container}>
        <div className={style.logo}>
          <SVG src="logo.svg" />
        </div>
        <div className={style.intro}>
          <p><strong>Art & Health on the Global Woman and Non-Binary</strong></p>
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

        <ul className={style.social}>
          <li>
            <a href='https://www.facebook.com/womanlymag' target='_blank'>
              <i className="fa fa-facebook icon" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/womanlymag' target='_blank'>
              <i className="fa fa-twitter icon" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/womanlymag/' target='_blank'>
              <i className="fa fa-instagram icon" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href='mailto:womanlymag@gmail.com' target='_blank'>
              <i className="fa fa-envelope-o icon" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;
