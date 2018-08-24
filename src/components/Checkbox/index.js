import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange, disabled }) => (
  <div className="checkbox">
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled}/>
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  label: '',
  checked: false,
  onChange: () => {},
  disabled: false,
};

export default Checkbox;
