import React from 'react';
import { action } from '@storybook/addon-actions';
import SmallBox from '.';

export default [
  {
    title: 'New Orders',
    component: <SmallBox title="New Orders" number="150"></SmallBox>
  },
  {
    title: 'Bounce Rate',
    component: <SmallBox title="Bounce Rate" number="53%" iconClass="fa-flag-o" bgColor="bg-yellow"></SmallBox>
  },
  {
    title: 'User Registrations',
    component: <SmallBox title="User Registrations" number="44" iconClass="fa-files-o" bgColor="bg-red"></SmallBox>
  },
  {
    title: 'Unique Visitors',
    component: <SmallBox title="Unique Visitors" number="65" iconClass="fa-star-o"></SmallBox>
  },
];
