import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ label, options, selected, onChange, disabled, multiple }) => {

  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="form-group">
      {label ? <label>{label}</label> : null}
      <select className="form-control" value={selected} onChange={handleSelectChange} disabled={disabled} multiple={multiple} >
        {options.map(option => (
          <option key={option.id} value={option.id}>{option.content}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  })),
  selected: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
};

Select.defaultProps = {
  label: '',
  options: [],
  selected: undefined,
  onChange: () => {},
  disabled: false,
  multiple: false,
};

export default Select;
