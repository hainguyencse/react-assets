import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ placeholder, value, rows, disabled, onChange }) => (
  <textarea
    className="form-control"
    rows={rows}
    placeholder={placeholder}
    value={value}
    disabled={disabled}
    onChange={onChange}
  />
);

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  placeholder: '',
  value: '',
  rows: 3,
  disabled: false,
  onChange: () => {},
};

export default TextArea;
