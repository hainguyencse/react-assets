import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/lib/Creatable';


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

const CreatableMultiSelectField = ({ name, validate, label, isDisabled, isLoading, onInputChange, options }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form }) => {
      const { onChange, value, ...restField } = field;
      const { setFieldValue } = form;
      const { errors, touched } = form;

      return (
        <div className="form-group">
          {label ? <label>{label}</label> : null}
          <CreatableSelect
            {...restField}
            value={value}
            isDisabled={isDisabled}
            isLoading={isLoading}
            options={options}
            isMulti
            onChange={(valueObj, actionObj) => {
              if (['select-option', 'create-option', 'remove-value', 'clear'].indexOf(actionObj.action) >= 0) {
                setFieldValue(name, valueObj);
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

CreatableMultiSelectField.propTypes = {
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

CreatableMultiSelectField.defaultProps = {
  label: '',
  options: [],
  onInputChange: () => {},
};

export default CreatableMultiSelectField;
