import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

// components
import Input from '../Input';

class InputField extends React.Component {
  render() {
    const { name, validate, formatter, ...inputProps } = this.props;

    return (
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
            onBlur={(e) => {
              if (inputProps.onBlur) inputProps.onBlur(e);
              field.onBlur(e);
            }}
            formatter={formatter}
          />
        )}
      />
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  formatter: PropTypes.object
};

export default InputField;
