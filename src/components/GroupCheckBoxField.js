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
            let nextValue = !field.value ? value : undefined;
            let formValue = form.values[gName] || [];
            if (checkboxProps.checked) {
              if (formValue.indexOf(value) >= 0) {
                nextValue = undefined;
                formValue = formValue.filter(item => item !== value);
              } else {
                nextValue = value;
                formValue.push(nextValue);
              }
            } else if (nextValue) {
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
