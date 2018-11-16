import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'formik';

import Button from './Button';

const ArrayField = ({ name, label, arrayData, ...inputProps }) => (
  <FieldArray
    name={name}
    render={arrayHelpers => (
      <div className="form-horizontal form-group">
        <label>{label}</label>
        {arrayData && arrayData.length > 0 ? (
          arrayData.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ width: 'calc(100% - 93px)', display: 'inline-block', marginRight: '10px', verticalAlign: 'top' }}>
                <Field name={`${name}.${index}`} className="form-control" />
              </div>
              <Button
                onClick={() => arrayHelpers.remove(index)}
                displayType={'danger'}
                data-toogle="tooltip"
                title={'Remove'}
              >
                <i className="fa fa-trash-o" />
              </Button> &nbsp;
              <Button
                onClick={() => arrayHelpers.insert(index, '')}
                displayType={'primary'}
                data-toogle="tooltip"
                title={'Add'}
              >
                <i className="fa fa-plus" />
              </Button>
            </div>
          ))
        ) : (
          <div>
            <Button
              onClick={() => arrayHelpers.push('')}
              data-toogle="tooltip"
              title={'Add Item'}
            >
              <i className="fa fa-plus"></i>&nbsp;Add Item
            </Button>
          </div>
        )}
      </div>
    )}
  />
);

ArrayField.propTypes = {
  name: PropTypes.string.isRequired,
  arrayData: PropTypes.array,
  validate: PropTypes.func,
};

export default ArrayField;
