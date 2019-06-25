import React from 'react';
import { action } from '@storybook/addon-actions';
import Table from '.';

const data = [{
  'id': 1,
  'first_name': 'Mark',
  'last_name': 'Otto',
  'username': '@mdo'
}, {
  'id': 2,
  'first_name': 'Mark',
  'last_name': 'Otto',
  'username': '@mdo'
}, {
  'id': 3,
  'first_name': 'Mark',
  'last_name': 'Otto',
  'username': '@mdo'
}, {
  'id': 4,
  'first_name': 'Mark',
  'last_name': 'Otto',
  'username': '@mdo'
}, {
  'id': 5,
  'first_name': 'Mark',
  'last_name': 'Otto',
  'username': '@mdo'
}, {
  'id': 6,
  'first_name': 'Mark',
  'last_name': 'Otto',
  'username': '@mdo'
}
];

export default [
  {
    title: 'Demo',
    component: <Table data={data}></Table>
  }
];
