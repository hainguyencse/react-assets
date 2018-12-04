import React from 'react';
import { action } from '@storybook/addon-actions';
import Radio from '.';

export default [
  {
    title: 'Demo',
    component:
    <div>
      <Radio label="Checkbox 1" name="name" value="1"></Radio>
      <Radio label="Checkbox 2" name="name" value="2"></Radio>
      <Radio label="Checkbox 3" name="name" value="3"></Radio>
    </div>
  }
];
