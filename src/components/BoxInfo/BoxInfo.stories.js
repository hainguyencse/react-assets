import React from 'react';
import { action } from '@storybook/addon-actions';
import BoxInfo from '.';

export default [
  {
    title: 'MESSAGES',
    component: <BoxInfo title="MESSAGES" number="123"></BoxInfo>
  },
  {
    title: 'BOOKMARKS',
    component: <BoxInfo title="BOOKMARKS" number="123" iconClass="fa-flag-o" bgColor="bg-yellow"></BoxInfo>
  },
  {
    title: 'UPLOADS',
    component: <BoxInfo title="UPLOADS" number="123" iconClass="fa-files-o"></BoxInfo>
  },
  {
    title: 'LIKES',
    component: <BoxInfo title="LIKES" number="123" iconClass="fa-star-o"></BoxInfo>
  },
];
