import React from 'react';
import { action } from '@storybook/addon-actions';
import Alert from '.';

export default [
  {
    title: 'Success',
    component: <Alert title="Success" type="success" content="This is a success alert" onDismiss={action('dismiss')} />
  },
  {
    title: 'Warning',
    component: <Alert title="Warning" type="warning" content="This is a warning alert" onDismiss={action('dismiss')} />
  },
  {
    title: 'Danger',
    component: <Alert title="Danger" type="danger" content="This is a danger alert" onDismiss={action('dismiss')} />
  },
];
