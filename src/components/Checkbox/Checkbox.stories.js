import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckBox from '.';

export default [
  {
    title: 'Demo',
    component: 
    <div>
      <CheckBox label="Checkbox 1"></CheckBox>
      <CheckBox label="Checkbox 2"></CheckBox>
      <CheckBox label="Checkbox 3"></CheckBox>
    </div>
  }
];
