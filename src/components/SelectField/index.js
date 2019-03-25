import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import Select from 'react-select';

const PRIMARY = '#3c8dbc';
const FOCUS_COLOR = '#cfebfc';
const INPUT_BORDER = '#d2d6de';
const INPUT_TEXT_COLOR = '#555';

export const customSelectStyles = {
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: isSelected ? PRIMARY : INPUT_BORDER,
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor:  isSelected ? PRIMARY : isFocused ? FOCUS_COLOR : 'white',
      color:  isSelected ? 'white' : INPUT_TEXT_COLOR,
    };
  },
};

const SelectField = ({ name, validate, label, isDisabled, isLoading, onInputChange, options, isMulti, className, onChange }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form }) => {
      const { value, ...restField } = field;
      const { setFieldValue } = form;
      const { errors, touched } = form;
      let selectedValue = null;
      if (isMulti && Array.isArray(value)) {
        selectedValue = value;
      } else {
        const selectedOptions = options.find(option => option.value === value);
        if (selectedOptions) {
          selectedValue = { value, label: selectedOptions.label };
        }
      }

      return (
        <div className={className || 'form-horizontal form-group'}>
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
              if (onChange) {
                onChange(valueObj, actionObj);
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
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
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
