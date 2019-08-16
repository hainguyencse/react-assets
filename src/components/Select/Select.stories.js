import React from 'react';
import Select from './index';

const options = [
  { label: 'option 1', value: 'option1' },
  { label: 'option 2', value: 'option2' },
  { label: 'option 3', value: 'option3' }
];

export default [
  {
    title: 'Demo',
    component: (
      <div>
        <Select
          label="Select"
          options={options}
          onChange={(selectedValue) => {
            console.log('selected value', selectedValue);
          }}
        />
      </div>
    )
  }
];
