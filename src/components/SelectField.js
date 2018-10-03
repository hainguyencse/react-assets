import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import Select from 'react-select';

const PRIMARY = '#3c8dbc';
const INPUT_BORDER = '#d2d6de';
const INPUT_TEXT_COLOR = '#555';

export const customSelectStyles = {
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: isFocused || isSelected ? PRIMARY : INPUT_BORDER,
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused || isSelected ? PRIMARY : 'white',
      color: isFocused || isSelected ? 'white' : INPUT_TEXT_COLOR,
    };
  },
};

const SelectField = ({ name, validate, label, isDisabled, isLoading, onInputChange, options }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form }) => {
      const { onChange, value, ...restField } = field;
      const { setFieldValue } = form;

      let selectedValue = null;
      const selectedOptions = options.find(option => option.value === value);
      if (selectedOptions) {
        selectedValue = { value, label: selectedOptions.label };
      }

      return (
        <div className="form-group">
          {label ? <label>{label}</label> : null}
          <Select
            {...restField}
            value={selectedValue}
            isDisabled={isDisabled}
            isLoading={isLoading}
            options={options}
            onChange={(valueObj, actionObj) => {
              if (actionObj.action === 'select-option') {
                setFieldValue(name, valueObj.value);
              }
            }}
            onInputChange={onInputChange}
            styles={customSelectStyles}
          />
        </div>
      );
    }}
  />
);

SelectField.propTypes = {
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

SelectField.defaultProps = {
  label: '',
  options: [],
  onInputChange: () => {},
};

export default SelectField;
