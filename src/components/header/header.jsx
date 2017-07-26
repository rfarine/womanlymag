import React from 'react';
import Link from 'gatsby-link';
import style from './header.module.scss';

const Header = () => {
  return (
    <div>
      <div className={style.title}>Womanly</div>

      <div className={style.navigationContainer}>
        <ul className={style.navigation}>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link to='/issues/0'>
              Issue
            </Link>
          </li>
          <li>
            <Link to='/resources'>
              Resources
            </Link>
          </li>
          <li>Search bar goes here</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;
