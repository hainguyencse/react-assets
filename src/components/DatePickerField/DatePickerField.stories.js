import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePickerField from '.';

export default [
  {
    title: 'Date Picker',
    component: <DatePickerField minDate={new Date()} />,
  }
];
