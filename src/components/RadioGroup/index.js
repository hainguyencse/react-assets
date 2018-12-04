import React from 'react';
import PropTypes from 'prop-types';

import Radio from "../Radio";

const RadioGroup = ({ options, onChange, selectedValue }) => {
  const handleRadioChange = (value) => {
    onChange(value);
  };

  return (
    <div className="form-group">
      {options.map(option => (
        <Radio
          key={option.id}
          label={option.label}
          checked={option.value === selectedValue}
          disabled={option.disabled}
          value={option.value}
          onChange={handleRadioChange.bind(this, option.value)}
        />
      ))}
    </div>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
  })),
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  options: [],
  onChange: () => {},
};

export default RadioGroup;
