import React from 'react';
import PropTypes from 'prop-types';
import style from './thumbnail.module.scss';

const Thumbnail = ({
  backgroundImageUrl,
  hoverText,
}) => {
  return (
    <span className={style.component}>
      <span
        className={style.image}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <span className={style.hover}>
          <strong>{hoverText.title}</strong>
          <span className={style.desc}>
            {hoverText.description}
          </span>
        </span>
      </span>
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
