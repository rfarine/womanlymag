import React from 'react';
import PropTypes from 'prop-types';
import style from './input.module.scss';

const Input = ({
  hiddenLabel,
  label,
  name,
  placeholder,
  required,
}) => {
  return (
    <span>
      <label
        className={hiddenLabel ? style.hiddenLabel : style.label}
        for={name}
      >
        {label}
      </label>
      <input
        aria-label={name}
        className={style.input}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </span>
  );
};

Input.defaultProps = {
  hiddenLabel: false,
  required: false,
};

Input.propTypes = {
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Input;
