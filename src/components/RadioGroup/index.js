import React from 'react';
import PropTypes from 'prop-types';

import Radio from "../Radio";

const RadioGroup = ({ options, onChange, selected }) => {
  const handleRadioChange = (id) => {
    onChange(id);
  };

  return (
    <div className="form-group">
      {options.map(option => (
        <Radio
          key={option.id}
          label={option.label}
          checked={option.id === selected}
          disabled={option.disabled}
          onChange={handleRadioChange.bind(this, option.id)}
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
  selected: PropTypes.string,
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  options: [],
  selected: '',
  onChange: () => {},
};

export default RadioGroup;
