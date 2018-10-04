import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import TextArea from './TextArea';

class CKEditor extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  render() {
    return (
      <textarea {...this.props} className="form-control"></textarea>
    )
  }

  componentDidMount() {
    if(typeof CKEDITOR == "undefined") {
      return "";
    }

    const { name } = this.props;
    CKEDITOR.replace(name);
    CKEDITOR.instances[name].on('change', function () {
      let data = CKEDITOR.instances[name].getData();
      this.props.onChange(data);
    }.bind(this));
  }
}

const WYSIWYGField = ({ label, name, validate, ...textAreaProps }) => {{
  return (
    <Field
      name={name}
      validate={validate}
      render={({ field }) => (
        <div className="form-horizontal form-group">
          <label>{label}</label>
          <CKEditor
            {...textAreaProps}
            {...field}
          />
        </div>
      )}
    />
  );
}};

WYSIWYGField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
};

export default WYSIWYGField;
