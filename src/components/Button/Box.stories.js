import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default [
  {
    title: 'Default',
    component: <Button onClick={action('clicked')}>Default</Button>
  },
  {
    title: 'Primary',
    component: <Button onClick={action('clicked')} type="primary">Primary</Button>
  },
  {
    title: 'Danger',
    component: <Button onClick={action('clicked')} type="danger">Danger</Button>
  },
];
