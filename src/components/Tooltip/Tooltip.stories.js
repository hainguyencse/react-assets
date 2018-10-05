import React from 'react';
import { action } from '@storybook/addon-actions';
import Tooltip from '.';

export default [
  {
    title: 'Top',
    component: <Tooltip message="3 adults, 1 children, 2 infants" position="top" children="Hover me!"></Tooltip>
  },
  // {
  //   title: 'Bottom',
  //   component: <Tooltip message="Tooltip Bottom" position="bottom" children="Hover me!"></Tooltip>
  // },
  // {
  //   title: 'Left',
  //   component: <Tooltip message="Tooltip Left" position="left" children="<strong>Hover me!</strong>"></Tooltip>
  // },
  // {
  //   title: 'Right',
  //   component: <Tooltip message="Tooltip Right" position="right" children="Hover me!"></Tooltip>
  // }
];
