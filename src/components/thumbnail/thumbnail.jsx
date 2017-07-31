import React from 'react';
import PropTypes from 'prop-types';
import style from './thumbnail.module.scss';

const Thumbnail = ({
  backgroundImageUrl,
  hoverText,
}) => {
  return (
    <span className={style.component}>
      <figure
        className={style.image}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <figcaption className={style.caption}>
          <p className={style.desc}>
            <strong>{hoverText.title}</strong>
            {hoverText.description}
          </p>
        </figcaption>
      </figure>
    </span>
  );
};

Thumbnail.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  hoverText: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Thumbnail;
