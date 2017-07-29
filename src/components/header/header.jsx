import React from 'react';
import { Container } from 'react-responsive-grid';
import Link from 'gatsby-link';
import style from './header.module.scss';

const Header = () => {
  return (
    <div>
      <div className={style.title}>Womanly</div>

      <div className={style.navigationContainer}>
        <Container style={{ maxWidth: 960 }}>
          <ul className={style.navigation}>
            <li>
              <Link to='/' className={style.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className={style.link}>
                About
              </Link>
            </li>
            <li>
              <Link to='/issues/0' className={style.link}>
                Issue
              </Link>
            </li>
            <li>
              <Link to='/resources' className={style.link}>
                Resources
              </Link>
            </li>
            <li>Search bar goes here</li>
          </ul>
        </Container>
      </div>
    </div>
  )
};

export default Header;
