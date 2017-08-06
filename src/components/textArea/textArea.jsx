import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './textArea.module.scss';

const TextArea = ({
  fullWidth,
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

  return (
    <span className={componentClasses}>
      <label
        className={style.label}
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        aria-label={name}
        className={style.textArea}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </span>
  );
};

TextArea.defaultProps = {
  fullWidth: false,
  required: false,
};

TextArea.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default TextArea;
