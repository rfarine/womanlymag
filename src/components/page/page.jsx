import React from 'react';
import style from './page.module.scss';

const Page = ({ children }) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
};

export default Page;
