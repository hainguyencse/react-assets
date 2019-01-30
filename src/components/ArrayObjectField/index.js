import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import Button from '../Button';

const ArrayObjectField = ({ name, label, arrayData, renderObject, ...inputProps }) => (
    <FieldArray
      name={name}
      render={arrayHelpers => (
        <div className="form-horizontal form-group">
          <label>{label}</label>
          {arrayData && arrayData.length > 0 ? (
            arrayData.map((item, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <div style={{ width: 'calc(100% - 93px)', display: 'inline-block', marginRight: '10px', verticalAlign: 'top' }}>
                  {renderObject(item, index)}
                </div>
                <Button
                  onClick={() => arrayHelpers.remove(index)}
                  displayType={'danger'} data-toogle="tooltip" title={'Remove'}>
                  <i className="fa fa-trash-o" />
                </Button> &nbsp;
                <Button
                  onClick={() => arrayHelpers.insert(index + 1, '')}
                  displayType={'primary'} data-toogle="tooltip" title={'Add'}>
                  <i className="fa fa-plus" />
                </Button>
              </div>
            ))
          ) : (
            <div>
              <Button
                onClick={() => arrayHelpers.push('')} data-toogle="tooltip" title={'Add Item'}>
                <i className="fa fa-plus"></i>&nbsp;Add Item
              </Button>
            </div>
          )}
        </div>
      )}
    />
  );

ArrayObjectField.propTypes = {
  name: PropTypes.string.isRequired,
  arrayData: PropTypes.array,
  validate: PropTypes.func,
  renderObject: PropTypes.func,
};

export default ArrayObjectField;