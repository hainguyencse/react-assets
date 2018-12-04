import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ label, checked, onChange, disabled, ...radioProps }) => (
  <div className="radio">
    <label>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...radioProps}
      />
      {label}
    </label>
  </div>
);

Radio.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  label: '',
  checked: false,
  onChange: () => {},
  disabled: false,
};

export default Radio;
