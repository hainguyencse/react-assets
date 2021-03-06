import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'formik';

import Button from '../Button';
import InputField from '../InputField';
import SelectField from '../SelectField';

const renderFieldValue = (item, keyOptions, name) => {
  const selectedOption = keyOptions.filter(option => option.value === item.key);
  if (selectedOption.length > 0 && selectedOption[0].type === 'select') {
    return (
      <SelectField name={name} options={selectedOption[0].subOptions} className="col-sm-4" />
    );
  }
  return (
    <div className="col-sm-4">
      <InputField name={name} />
    </div>
  );
}

const ArrayFilterField = ({ name, label, keyOptions, typeOptions, arrayData, ...inputProps }) => (
  <FieldArray
    name={name}
    render={arrayHelpers => (
      <div className="form-horizontal form-group">
        <label>{label}</label>
        {arrayData && arrayData.length > 0 &&
          arrayData.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ width: 'calc(100% - 37px)', display: 'inline-block', marginRight: '10px', verticalAlign: 'top' }}>
                <div className="row">
                  <SelectField name={`${name}.${index}.key`} options={keyOptions} className="col-sm-4" />
                  <SelectField name={`${name}.${index}.type`} options={typeOptions} className="col-sm-3" />
                  {renderFieldValue(item, keyOptions, name.concat('.').concat(index).concat('.').concat('value'))}
                  <div className="col-sm-1">
                    <Button
                      onClick={() => arrayHelpers.remove(index)}
                      displayType={'danger'}
                      data-toogle="tooltip"
                      title={'Remove'}
                    >
                      <i className="fa fa-trash-o" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        <div>
          <Button
            onClick={() => arrayHelpers.push('')}
            data-toogle="tooltip"
            title={'Add Item'}
          >
            <i className="fa fa-plus"></i>&nbsp;Add Item
          </Button>
        </div>
      </div>
    )}
  />
);

ArrayFilterField.propTypes = {
  name: PropTypes.string.isRequired,
  arrayData: PropTypes.array,
  validate: PropTypes.func,
};

export default ArrayFilterField;
