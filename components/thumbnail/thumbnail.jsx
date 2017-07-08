import React from 'react';
import style from './thumbnail.module.scss';

const Thumbnail = ({
  backgroundImageUrl,
  text,
  url,
}) => {
  return (
    <a href={url} className={style.component}>
      <span
        className={style.image}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {text}
      </span>
    </a>
  );
};

export default Thumbnail;
