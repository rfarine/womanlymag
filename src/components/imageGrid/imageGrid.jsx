import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import style from './imageGrid.module.scss';

const renderGrid = (items) => {
  return items.map((item) => {
    return (
      <li key={item.slug}>
        <Link to={item.url}>
          <span
            className={style.item}
            style={{ backgroundImage: `url(${item.thumbnail.url})` }}
          />
        </Link>
      </li>
    );
  });
};

const ImageGrid = ({ items }) => {
  return (
    <ul>
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
