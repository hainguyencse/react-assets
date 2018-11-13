import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import TextArea from './TextArea';

const TextAreaField = ({ name, validate, ...textAreaProps }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field }) => (
      <TextArea
        {...textAreaProps}
        {...field}
      />
    )}
  />
);

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

export default TextAreaField;
