import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Checkbox from './CheckBox';

/*
* Group checkbox field use to collect all checkbox is same name
* */
const GroupCheckboxField = ({ gName, name, validate, value, ...checkboxProps }) => (
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
            const nextValue = !field.value ? value : undefined;
            let formValue = form.values[gName] || [];
            if (nextValue) {
              formValue.push(nextValue);
            } else {
              formValue = formValue.filter(item => item !== value);
            }
            form.setFieldValue(name, nextValue);
            form.setFieldValue(gName, formValue);
          }}
        />
      );
    }}
  />
);

GroupCheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

export default GroupCheckboxField;
