import React from 'react';
import { action } from '@storybook/addon-actions';
import Tooltip from '.';

export default [
  {
    title: 'Top',
    component: <Tooltip visible text="Tooltip Top" position="top"></Tooltip>
  },
  {
    title: 'Bottom',
    component: <Tooltip visible text="Tooltip Bottom" position="bottom"></Tooltip>
  },
  {
    title: 'Left',
    component: <Tooltip visible text="Tooltip Left" position="left"></Tooltip>
  },
  {
    title: 'Right',
    component: <Tooltip visible text="Tooltip Right" position="right"></Tooltip>
  }
];
