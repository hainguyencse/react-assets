import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import MarkdownEditor from './MarkdownEditor';

const MarkdownField = ({ name, validate, ...editorProps }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form: { errors, touched, setFieldValue } }) => {
      const { onBlur, onChange, ...restField } = field;
      return (
        <MarkdownEditor
          error={errors[name]}
          touched={touched[name]}
          {...editorProps}
          {...restField}
          onChange={value => setFieldValue(name, value)}
        />
      );
    }}
  />
);

MarkdownField.propTypes = {
  /**
   * Name of the field
   */
  name: PropTypes.string.isRequired,
  /**
   * The validate function
   */
  validate: PropTypes.func,
};

export default MarkdownField;
