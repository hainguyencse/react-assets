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
          onChange={(event) => {
            let nextValue;
            if (value) {
              nextValue = !field.value ? value : undefined;
            } else {
              nextValue = event.target.checked;
            }
            form.setFieldValue(name, nextValue);
          }}
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
