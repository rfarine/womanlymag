import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../button/button';

import style from './input.module.scss';

const Input = ({
  button,
  fullWidth,
  hiddenLabel,
  label,
  name,
  onChange,
  placeholder,
  required,
  value,
}) => {
  const componentClasses = cn(style.component, {
    [style.fullWidth]: fullWidth,
  });

  const inputClasses = cn(style.input, {
    [style.withButton]: button,
  });

  return (
    <span className={componentClasses}>
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
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
      {
        button &&
        <Button
          id={button.id}
          name={button.name}
          onClick={button.onClick}
          text={button.text}
        />
      }
    </span>
  );
};

Input.defaultProps = {
  button: null,
  fullWidth: false,
  hiddenLabel: false,
  required: false,
};

Input.propTypes = {
  button: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
  }),
  fullWidth: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default Input;
