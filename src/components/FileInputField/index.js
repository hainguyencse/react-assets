import React, { Fragment } from 'react';
import { Field } from 'formik';

const FileInputField = ({ label, ...restProps }) => (
  <Field
    {...restProps}
    render={({ field: { name }, form: { setFieldValue } }) => (
      <Fragment>
        <label htmlFor={`${name}-input`}>{label}</label>
        <input
          id={`${name}-input`}
          className="form-control"
          type="file"
          name={name}
          onChange={(event) => {
            setFieldValue(name, event.currentTarget.files[0]);
          }}
        />
      </Fragment>
    )}
  />
);

export default FileInputField;
