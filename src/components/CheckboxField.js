import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Checkbox from './CheckBox';

const CheckboxField = ({ name, validate, ...checkboxProps }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field }) => {
      const { value, onChange, ...restField } = field;

      return (
        <Checkbox
          {...checkboxProps}
          {...restField}
          onChange={e => {
            const event = { ...e };
            onChange(event);
          }}
          checked={value}
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
