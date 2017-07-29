import React from 'react';
import PropTypes from 'prop-types';

import style from './button.module.scss';

const Button = ({
  onClick,
  text
}) => {
  return (
    <button
      className={style.button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  button: null,
  hiddenLabel: false,
  required: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
