import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';


const AsyncSelectField = ({ name, validate, label, onInputChange, loadOptions, isMulti }) => (
  <Field
    name={name}
    validate={validate}
    render={({ field, form }) => {
      const { value, ...restField } = field;
      const { setFieldValue } = form;
      const { errors, touched } = form;

      return (
        <div className="form-group">
          {label ? <label>{label}</label> : null}
          <AsyncSelect
            {...restField}
            value={value}
            isMulti={isMulti}
            loadOptions={loadOptions}
            onChange={(onChangeValue) => {
              setFieldValue(name, onChangeValue);
            }}
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

AsyncSelectField.propTypes = {
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  isMulti: PropTypes.bool,
  name: PropTypes.string.isRequired,
  loadOptions: PropTypes.func,
  validate: PropTypes.func,
};

AsyncSelectField.defaultProps = {
  isMulti: false,
  label: '',
  onInputChange: () => {},
};

export default AsyncSelectField;
