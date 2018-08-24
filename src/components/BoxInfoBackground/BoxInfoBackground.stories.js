import React from 'react';
import { action } from '@storybook/addon-actions';
import BoxInfoBackground from '.';

export default [
  {
    title: 'Messages',
    component: <BoxInfoBackground title="MESSAGES" number="41,410" percent={70}></BoxInfoBackground>
  },
  {
    title: 'Bookmarks',
    component: <BoxInfoBackground title="BOOKMARKS" number="123" iconClass="fa-flag-o" bgColor="bg-yellow" percent={20}></BoxInfoBackground>
  },
  {
    title: 'Uploads',
    component: <BoxInfoBackground title="UPLOADS" number="123" iconClass="fa-files-o" percent={50}></BoxInfoBackground>
  },
  {
    title: 'Likes',
    component: <BoxInfoBackground title="LIKES" number="123" iconClass="fa-star-o" percent={20}></BoxInfoBackground>
  },
];
