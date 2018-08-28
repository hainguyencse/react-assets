import React from 'react';
import { action } from '@storybook/addon-actions';
import Table from '.';

var data =  [
              {
                '#' : '1',
                'First Name' : 'Mark',
                'Last Name' : 'Otto',
                'Username' : '@mdo'
              },
              {
                '#' : '2',
                'First Name' : 'Mark',
                'Last Name' : 'Otto',
                'Username' : '@mdo'
              }
            ];

export default [
  {
    title: 'Demo',
    component: <Table data={data}></Table>
  }
];
