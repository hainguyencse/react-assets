import React from 'react';
import { action } from '@storybook/addon-actions';
import BoxInfo from '.';

export default [
  {
    title: 'Messages',
    component: <BoxInfo title="MESSAGES" number="123" fill></BoxInfo>
  },
  {
    title: 'Bookmarks',
    component: <BoxInfo title="BOOKMARKS" number="123" iconClass="fa-flag-o" bgColor="bg-yellow"></BoxInfo>
  },
  {
    title: 'Uploads',
    component: <BoxInfo title="UPLOADS" number="123" iconClass="fa-files-o"></BoxInfo>
  },
  {
    title: 'Likes',
    component: <BoxInfo title="LIKES" number="123" iconClass="fa-star-o"></BoxInfo>
  },
];
