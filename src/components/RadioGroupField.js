import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import RadioGroup from './RadioGroup/index';

class RadioGroupField extends Component {
  render() {
    const { name, validate, options, onChange } = this.props;
    return (
      <Field
        name={name}
        validate={validate}
        render={({ field, form }) => {
          const { value, ...restField } = field;
          const { setFieldValue } = form;
          const { errors, touched } = form;

          return (
            <div>
              <RadioGroup
                options={options}
                onChange={(newValue) => {
                  setFieldValue(name, newValue);
                  if (onChange) {
                    onChange(newValue);
                  }
                }}
                selectedValue={value}
              />
              {errors[name] && touched[name]
                ? (
                  <div className="form-horizontal form-group has-error">
                    <span className="help-block">{errors[name]}</span>
                  </div>
                ) : null}
            </div>
          );
        }}
      />
    );
  }
}

RadioGroupField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  onChange: PropTypes.func,
};

RadioGroupField.defaultProps = {};

export default RadioGroupField;
