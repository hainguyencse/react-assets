import React from 'react';
import { action } from '@storybook/addon-actions';
import BoxInfoBackground from '.';

export default [
  {
    title: 'Messages',
    component: <BoxInfoBackground title="MESSAGES" number="41,410"></BoxInfoBackground>
  },
  {
    title: 'Bookmarks',
    component: <BoxInfoBackground title="BOOKMARKS" number="123" iconClass="fa-flag-o" bgColor="bg-yellow"></BoxInfoBackground>
  },
  {
    title: 'Uploads',
    component: <BoxInfoBackground title="UPLOADS" number="123" iconClass="fa-files-o"></BoxInfoBackground>
  },
  {
    title: 'Likes',
    component: <BoxInfoBackground title="LIKES" number="123" iconClass="fa-star-o"></BoxInfoBackground>
  },
];
