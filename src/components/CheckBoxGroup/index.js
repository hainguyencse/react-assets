import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../CheckBox';

const CheckboxGroup = ({ options, onChange }) => {
  const handleCheckboxChange = (id, event) => {
    onChange(id, event.target.checked);
  };

  return (
    <div className="form-group">
      {
        options.map(option => (
          <Checkbox
            key={option.id}
            label={option.label}
            checked={option.checked}
            disabled={option.disabled}
            onChange={handleCheckboxChange.bind(this, option.id)}
          />
        ))
      }
    </div>
  );
};

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  })),
  onChange: PropTypes.func,
};

CheckboxGroup.defaultProps = {
  options: [],
  onChange: () => {},
};

export default CheckboxGroup;
