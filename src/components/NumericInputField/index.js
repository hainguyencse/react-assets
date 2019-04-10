import React from 'react';

// components
import InputField from '../InputField';

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const formatSeparator = value => value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const unformat = value => value && value.toString().replace(/[,]/g, '');

const formatter = { format: formatSeparator, unformat };

const NumericInputField = ({ ...inputProps }) => (
  <InputField
    formatter={formatter}
    {...inputProps}
  />
);

export default NumericInputField;
