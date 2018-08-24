import React from 'react';
import { action } from '@storybook/addon-actions';
import Breadcrumb from '.';

var data =  [
              {
                'itemText' : 'Link 1',
                'itemUrl' : 'google.com.vn'
              },
              {
                'itemText' : 'Link 2',
                'itemUrl' : 'google.com.vn'
              }
            ];

export default [
  {
    title: 'Demo',
    component: <Breadcrumb history={data} currentPage="Title of current page"></Breadcrumb>
  }
];
