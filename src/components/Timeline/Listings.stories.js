import React from 'react';
import { action } from '@storybook/addon-actions';
import Timeline from '.';

const mockTimeline = [
  {
    id: '1',
    user: 'Nguyen Ngo',
    actionName: 'notes',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    time: 'July 26 2018 12:30:23 GMT',
    bgColor: '#FFF3CD',
    photoSrc: 'https://akphoto1.ask.fm/915/935/655/920003004-1rs39kg-c4c4oa1s4a2hgbk/original/avatar.jpg'
  },
  {
    id: '2',
    user: 'vozmod2',
    actionName: 'ban',
    target: 'user testuser',
    time: 'July 25 2018 12:00:30 GMT',
    extra_data: JSON.stringify([
      {
        'actual_cost': '3867000.00'
      },
      {
        'cost': '3867000.00'
      },
      {
        'amount': '3867000.00'
      },
      {
        'amount_remained': '0.00'
      },
      {
        'state': '1002'
      },
      {
        'payment_date': '2019-08-12 08:18:12.828865+00:00'
      }
    ], null, 2)
  },
  {
    id: '3',
    user: 'vozmod2',
    actionName: 'edit',
    target: 'user testuser',
    time: 'July 15 2018 12:00:30 GMT',
    extra_data: JSON.stringify([
      {
        'actual_cost': '3867000.00'
      },
      {
        'cost': '3867000.00'
      },
      {
        'amount': '3867000.00'
      },
      {
        'amount_remained': '0.00'
      },
      {
        'state': '1002'
      },
      {
        'payment_date': '2019-08-12 08:18:12.828865+00:00'
      }
    ], null, 2)
  },
  {
    id: '4',
    user: 'vozmod2',
    actionName: 'ban',
    target: 'user testuser',
    time: 'July 12 2018 12:00:30 GMT',
    extra_data: JSON.stringify([
      {
        'actual_cost': '3867000.00'
      },
      {
        'cost': '3867000.00'
      },
      {
        'amount': '3867000.00'
      },
      {
        'amount_remained': '0.00'
      },
      {
        'state': '1002'
      },
      {
        'payment_date': '2019-08-12 08:18:12.828865+00:00'
      }
    ], null, 2)
  },

];

export default [
  {
    title: 'Timeline demo',
    component: <Timeline actionHistory={mockTimeline} />
  }
];
