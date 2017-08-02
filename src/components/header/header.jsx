import React from 'react';
import { Container } from 'react-responsive-grid';
import Link from 'gatsby-link';
import Input from '../input/input';
import style from './header.module.scss';
import logo from '../../assets/images/logo-fulltext.png';

const Header = () => {
  return (
    <div>
      <img className={style.logo} src={logo} alt="Womanly" />
      <div className={style.headerLine} />

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
              <Link to='/resources' className={style.link}>
                Resources
              </Link>
            </li>
            <li>
              <Input
                button={{
                  onClick: () => alert(1),
                  text: 'Search',
                }}
                label="Search"
                name="search"
                placeholder="Search Articles"
                hiddenLabel
              />
            </li>
          </ul>
        </Container>
      </div>
    </div>
  )
};

export default Header;
