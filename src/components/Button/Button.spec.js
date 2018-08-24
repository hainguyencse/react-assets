import React from 'react';
import Button from './index';

describe('Button', () => {
  test('should render properly', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Button type="primary" block>Click me</Button>);

    // eslint-disable-next-line
    expect(wrapper).toMatchSnapshot();
  });
});
