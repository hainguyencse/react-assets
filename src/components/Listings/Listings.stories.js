import React from 'react';
import { action } from '@storybook/addon-actions';
import Listings from '.';

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

const columns = [
  {
    id: 'id',
    title: 'ID',
    render: ({ id }) => <span>{ id }</span>
  },
  {
    id: 'first_name',
    title: 'first_name',
    render: ({ first_name }) => <span>{ first_name }</span>
  },
  {
    id: 'last_name',
    title: 'last_name',
    render: ({ last_name }) => <span>{ last_name }</span>
  },
  {
    id: 'username',
    title: 'username',
    render: ({ username }) => <span>{ username }</span>
  },
];

const handleSort = x => console.log(x);
const handlePageChange = x => console.log(x);

export default [
  {
    title: 'Demo',
    component: <Listings
      listingsTitle="Demo List"
      data={data}
      columns={columns}
      onSortHeader={handleSort}
      page={parseInt(1, 10)}
      dataCount={50}
      itemsPerPage={20}
      onPageChange={handlePageChange}
      pageRange={3}
      sortParams={{sortBy: 'id', sortDirection: 'asc'}}
    />
  }
];
