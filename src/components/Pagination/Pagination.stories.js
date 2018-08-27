import React from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from '.';

var pages =  [
							{
                'pageText' : 'Prev',
                'pageUrl' : 'google.com.vn'
              },
              {
                'pageText' : '1',
                'pageUrl' : 'google.com.vn'
              },
              {
                'pageText' : '2',
                'pageUrl' : 'google.com.vn'
              },
              {
                'pageText' : '3',
                'pageUrl' : 'google.com.vn'
              },
              {
                'pageText' : 'Next',
                'pageUrl' : 'google.com.vn'
              }
            ];

export default [
  {
    title: 'Demo',
    component: <Pagination pages={pages}></Pagination>
  }
];
