import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Thumbnail from '../thumbnail/thumbnail';

import style from './imageGrid.module.scss';

const renderGrid = (items) => {
  return items.map((item) => {
    return (
      <li key={item.slug} className={style.item}>
        <Link to={item.url}>
          <Thumbnail backgroundImageUrl={item.thumbnail.url} />
        </Link>
      </li>
    );
  });
};

const ImageGrid = ({ items }) => {
  return (
    <ul className={style.grid}>
      {renderGrid(items)}
    </ul>
  )
};

ImageGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGrid;
