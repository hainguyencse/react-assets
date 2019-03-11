import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Input from '../Input';

const InputField = ({ name, validate, ...inputProps }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form: { errors, touched } }) => (
      <Input
        displayType={errors[name] ? 'error' : 'default'}
        message={errors[name] && touched[name] ? errors[name] : ''}
        {...inputProps}
        {...field}
        onChange={(e) => {
          if (inputProps.onChange) inputProps.onChange(e);
          field.onChange(e);
        }}
      />
    )}
  />
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

export default InputField;
