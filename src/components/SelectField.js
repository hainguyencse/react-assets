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

const SelectField = ({ name, validate, label, isDisabled, isLoading, onInputChange, options, isMulti }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form }) => {
      const { onChange, value, ...restField } = field;
      const { setFieldValue } = form;
      const { errors, touched } = form;
      let selectedValue = null;
      if (Array.isArray(value)) {
        selectedValue = value;
      } else {
        const selectedOptions = options.find(option => option.value === value);
        if (selectedOptions) {
          selectedValue = { value, label: selectedOptions.label };
        }
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
            isMulti={isMulti}
            onChange={(valueObj, actionObj) => {
              if (['select-option', 'remove-value'].indexOf(actionObj.action) >= 0) {
                if (Array.isArray(valueObj)) {
                  setFieldValue(name, valueObj);
                } else {
                  setFieldValue(name, valueObj.value);
                }
              }
            }}
            onInputChange={onInputChange}
            styles={customSelectStyles}
          />
          {errors[name] && touched[name]
            ? (
              <div className="form-horizontal form-group has-error">
                <span className="help-block">{errors[name]}</span>
              </div>
            ) : null}
        </div>
      );
    }}
  />
);

SelectField.propTypes = {
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isMulti: PropTypes.bool,
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
  isMulti: false,
  label: '',
  options: [],
  onInputChange: () => {},
};

export default SelectField;
