import React from 'react';
import { Container } from 'react-responsive-grid';
import Link from 'gatsby-link';
import Input from '../input/input';

import style from './footer.module.scss';

const Footer = () => {
  return (
    <div className={style.container}>
      <Container style={{ maxWidth: 960 }}>
        <div className={style.contentContainer}>
          <div className={style.logo} />
          <div className={style.content}>
            <Link to='/about' className={style.link}>
              Contact Us
            </Link>
            <ul className={style.social}>
              <li>
                <a
                  className={style.socialLink}
                  href='https://www.facebook.com/womanlymag'
                  title='Facebook'
                  target='_blank'
                >
                  <i className="fa fa-facebook icon" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className={style.socialLink}
                  href='https://twitter.com/womanlymag'
                  title='Twitter'
                  target='_blank'
                >
                  <i className="fa fa-twitter icon" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className={style.socialLink}
                  href='https://www.instagram.com/womanlymag/'
                  title='Instagram'
                  target='_blank'
                >
                  <i className="fa fa-instagram icon" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <form
            action='//twitter.us15.list-manage.com/subscribe/post?u=8f848089b50e1ba3b7a3c400f&amp;id=3fe0717806'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            target='_blank'
          >
            <Input
              button={{
                id: 'mc-embedded-subscribe',
                name: 'subscribe',
                text: 'Subscribe',
              }}
              id='mce-EMAIL'
              label="Subscribe to our newsletter!"
              name="EMAIL"
              placeholder="youremail@email.com"
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
          </form>
        </div>
      </Container>
    </div>
  )
};

export default Footer;
