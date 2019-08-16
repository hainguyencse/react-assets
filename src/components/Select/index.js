import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

const PRIMARY = '#3c8dbc';
const FOCUS_COLOR = '#cfebfc';
const INPUT_BORDER = '#d2d6de';
const INPUT_TEXT_COLOR = '#555';

export const customSelectStyles = {
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: isSelected ? PRIMARY : INPUT_BORDER
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? PRIMARY : isFocused ? FOCUS_COLOR : 'white',
      color: isSelected ? 'white' : INPUT_TEXT_COLOR
    };
  }
};

const Select = ({ label, options, ...selectProps }) => {
  return (
    <div className="form-group">
      {label ? <label>{label}</label> : null}
      <ReactSelect
        {...selectProps}
        options={options}
        styles={customSelectStyles}
      />
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  )
};

Select.defaultProps = {
  label: '',
  options: []
};

export default Select;
