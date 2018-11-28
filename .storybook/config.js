import React from 'react';
import { configure, addDecorator, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../src/components', true, /\.stories\.js$/);
const compNameRegex = /\.\/(.+)\//;

function loadStories() {
  req.keys().forEach((filename) => {
    const stories = req(filename).default;
    const storyConfig = storiesOf(compNameRegex.exec(filename)[1], module);
    stories.forEach(story => {
      storyConfig.add(story.title, () => story.component);
    });
  });
}

addDecorator(withInfo());

addDecorator(story => (
  <div style={{padding: '10px', paddingTop: '50px'}}>
    {story()}
  </div>
));

configure(loadStories, module);
