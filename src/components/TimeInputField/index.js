import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import TimeInput from 'react-time-input';

const TimeInputField = ({ name, validate, mountFocus, ...inputProps }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form: { errors, touched, setFieldValue } }) => (
      <div>
        <TimeInput
          initTime={field.value}
          mountFocus
          onTimeChange={(val) => {
            setFieldValue(name, val);
          }}
          {...inputProps}
        />
        {errors[name] && touched[name]
          ? (
            <div className="form-horizontal form-group has-error">
              <span className="help-block">{errors[name]}</span>
            </div>
          ) : null}
      </div>
    )}
  />
);

TimeInputField.defaultProps = {
  mountFocus: false
};

TimeInputField.propTypes = {
  name: PropTypes.string.isRequired,
  mountFocus: PropTypes.bool,
  validate: PropTypes.func,
};

export default TimeInputField;
