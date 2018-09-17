import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ label, checked, onChange, disabled }) => (
  <div className="checkbox">
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled}/>
      &nbsp;{label}
    </label>
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

CheckBox.defaultProps = {
  label: '',
  checked: undefined,
  onChange: () => {},
  disabled: false,
};

export default CheckBox;
