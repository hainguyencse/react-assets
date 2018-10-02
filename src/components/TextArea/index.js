import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ placeholder, value, rows, disabled, label, onChange, subText }) => (
  <div className="form-group">
    <label>{label}</label>
    <textarea
      className="form-control"
      rows={rows}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      style={{ resize: 'vertical' }}
    />
    <span>{subText}</span>
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  subText: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  labe: null,
  placeholder: '',
  subText: '',
  value: undefined,
  rows: 3,
  disabled: false,
  onChange: () => {},
};

export default TextArea;
