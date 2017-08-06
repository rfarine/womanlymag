import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './textArea.module.scss';

const TextArea = ({
  fullWidth,
  label,
  name,
  placeholder,
  required,
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
        placeholder={placeholder}
        required={required}
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
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default TextArea;
