import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, ...checkboxProps }) => (
  <div className="checkbox">
    <label>
      <input type="checkbox" {...checkboxProps} />
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  /**
   * Label of the checkbox
   */
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: '',
};

export default Checkbox;
