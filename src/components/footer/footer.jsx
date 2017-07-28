import React from 'react';
import { Container } from 'react-responsive-grid';
import Link from 'gatsby-link';
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
        </div>
      </Container>
    </div>
  )
};

export default Footer;
