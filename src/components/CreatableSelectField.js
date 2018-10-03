import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/lib/Creatable';
import { customSelectStyles } from './SelectField';

const CreatableSelectField = ({ name, validate, label, isDisabled, isLoading, onInputChange, options }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form }) => {
      const { onChange, value, ...restField } = field;
      const { setFieldValue } = form;

      const selectedValues = value.map(selected => {
        const selectedOption = options.find(option => option.value === selected);
        return { value: selected, label: selectedOption ? selectedOption.label : selected };
      });

      return (
        <div className="form-group">
          {label ? <label>{label}</label> : null}
          <CreatableSelect
            {...restField}
            value={selectedValues}
            isMulti
            isDisabled={isDisabled}
            isLoading={isLoading}
            options={options}
            onChange={values => {
              setFieldValue(name, values.map(item => item.value));
            }}
            onInputChange={onInputChange}
            styles={customSelectStyles}
          />
        </div>
      );
    }}
  />
);

CreatableSelectField.propTypes = {
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

CreatableSelectField.defaultProps = {
  isDisabled: false,
  isLoading: false,
  onInputChange: () => {},
  label: '',
  options: [],
};

export default CreatableSelectField;
