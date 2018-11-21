import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Checkbox from './CheckBox';

const CheckboxField = ({ name, validate, value, ...checkboxProps }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form }) => {
      const { onChange, ...restField } = field;

      return (
        <Checkbox
          {...checkboxProps}
          {...restField}
          onChange={() => {
            const nextValue = !field.value ? value : undefined;
            form.setFieldValue(name, nextValue);
          }}
          checked={field.value}
        />
      );
    }}
  />
);

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

export default CheckboxField;
