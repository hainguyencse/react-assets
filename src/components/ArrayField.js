import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'formik';

import Button from './Button';

const ArrayField = ({ name, arrayData, validate, ...inputProps }) => (
  <FieldArray
    name={name}
    render={arrayHelpers => (
      <div>
        <label>{label}</label>
        {arrayData && arrayData.length > 0 ? (
          arrayData.map((friend, index) => (
            <div key={index}>
              <Field name={`${name}.${index}`} />
              <Button
                onClick={() => arrayHelpers.remove(index)}
                displayType={'danger'}
                size="xs"
                data-toogle="tooltip"
                title={'Remove'}
              >
                -
              </Button>
              <Button
                onClick={() => arrayHelpers.insert(index)}
                displayType={'primary'}
                size="xs"
                data-toogle="tooltip"
                title={'Add'}
              >
                +
              </Button>
            </div>
          ))
        ) : (
          <Button
            onClick={() => arrayHelpers.push('')}
            displayType={'primary'}
            size="xs"
            data-toogle="tooltip"
            title={'Add Item'}
          >
            Add Item
          </Button>
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
