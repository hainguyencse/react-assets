import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

// components
import Input from '../Input';

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const formatSeparator = amount => amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

class InputField extends React.Component {
  format = value => value && formatSeparator(value);

  unformat = value => value && value.toString().replace(/[,]/g, '');

  render() {
    const { name, validate, isCommaSeparated, ...inputProps } = this.props;

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
            formatter={isCommaSeparated && { format: this.format, unformat: this.unformat }}
          />
        )}
      />
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  /**
   * isCommaSeparated determines whether to separate the numeric value by comma
   */
  isCommaSeparated: PropTypes.bool
};

InputField.defaultProps = {
  isCommaSeparated: false
};

export default InputField;
