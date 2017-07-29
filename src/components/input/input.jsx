import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../button/button';

import style from './input.module.scss';

const Input = ({
  button,
  hiddenLabel,
  label,
  name,
  placeholder,
  required,
}) => {
  const inputClasses = cn(style.input, {
    [style.withButton]: button,
  });

  return (
    <span>
      <label
        className={hiddenLabel ? style.hiddenLabel : style.label}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        aria-label={name}
        className={inputClasses}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      {
        button &&
        <Button
          onClick={button.onClick}
          text={button.text}
        />
      }
    </span>
  );
};

Input.defaultProps = {
  button: null,
  hiddenLabel: false,
  required: false,
};

Input.propTypes = {
  button: PropTypes.shape({
    onClick: PropTypes.func,
    text: PropTypes.string,
  }),
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClickButton: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Input;
