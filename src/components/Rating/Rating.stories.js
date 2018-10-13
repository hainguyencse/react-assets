import React from 'react';
import Rating from './index';

export default [
  {
    title: 'All full stars',
    component: <Rating rating={5} />,
  },
  {
    title: 'Some full stars',
    component: <Rating rating={3} />,
  },
  {
    title: 'Half star',
    component: <Rating rating={4.5} />,
  },
  {
    title: '< 0.25',
    component: <Rating rating={4.1} />,
  },
  {
    title: '< 0.75',
    component: <Rating rating={4.74} />,
  },
  {
    title: '> 0.75',
    component: <Rating rating={4.76} />,
  },
];
