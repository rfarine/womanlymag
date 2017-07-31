import React from 'react';
import PropTypes from 'prop-types';

import style from './button.module.scss';

const Button = ({
  id,
  name,
  onClick,
  text,
  type,
}) => {
  return (
    <button
      className={style.button}
      id={id}
      name={name}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  button: null,
  hiddenLabel: false,
  onClick: null,
  required: false,
  type: 'submit',
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
