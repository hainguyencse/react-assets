import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
let FroalaEditor = null;
if (typeof window !== 'undefined') {
  require('froala-editor/js/froala_editor.pkgd.min.js');
  FroalaEditor = require('react-froala-wysiwyg').default;
}

class FroalaField extends Component {
  render() {
    const { name, validate, label, ...restProps } = this.props;
    return (
      <Field
        name={name}
        validate={validate}
        render={({ field, form }) => {
          const { value, ...restField } = field;
          const { setFieldValue } = form;
          const { errors, touched } = form;

          return (
            <div className="form-horizontal form-group">
              {label ? <label>{label}</label> : null}
              {
                FroalaEditor
                  ? (
                    <FroalaEditor
                      model={value}
                      onModelChange={(content) => {
                        setFieldValue(name, content);
                      }}
                    />) : null
              }
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

FroalaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

FroalaField.defaultProps = {};

export default FroalaField;
