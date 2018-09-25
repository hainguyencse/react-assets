import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from "../CheckBox";

const CheckBoxGroup = ({ options, onChange }) => {
  const handleCheckBoxChange = (id, event) => {
    onChange(id, event.target.checked);
  };

  return (
    <div className="form-group">
      {
        options.map(option => (
          <CheckBox
            key={option.id}
            label={option.label}
            checked={option.checked}
            disabled={option.disabled}
            onChange={handleCheckBoxChange.bind(this, option.id)} />
        ))
      }
    </div>
  );
};

CheckBoxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  })),
  onChange: PropTypes.func,
};

CheckBoxGroup.defaultProps = {
  options: [],
  onChange: () => {},
};

export default CheckBoxGroup;
