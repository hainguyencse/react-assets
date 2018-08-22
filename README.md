# admin-assets

### Import components
- From CLI
```
npm install --save git+ssh://git@github.com:inspilab/admin-assets.git
```
- In code
```
import { Button } from 'admin-assets'
```

### Testing
```
npm run test
```

### Run story book
```
npm run storybook
```

### Generate static storybook
```
npm run export-storybook
```

### Write stories for components
- In component folder, create a file with format ***[name].stories.js***
- Example
```js
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default [
  {
    title: 'Default',
    component: <Button onClick={action('clicked')}>Default</Button>
  },
  {
    title: 'Primary',
    component: <Button onClick={action('clicked')} type="primary">Primary</Button>
  },
  {
    title: 'Danger',
    component: <Button onClick={action('clicked')} type="danger">Danger</Button>
  },
];

```
