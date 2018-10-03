import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ label, options, ...selectProps }) => {
  return (
    <div className="form-group">
      {label ? <label>{label}</label> : null}
      <select className="form-control" {...selectProps}>
        {options.map(option => (
          <option key={option.id} value={option.id}>{option.content}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  /**
   * Label of the Select component
   */
  label: PropTypes.string,
  /**
   * Options to pass in the inner select component
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  })),
};

Select.defaultProps = {
  label: '',
  options: [],
};

export default Select;
