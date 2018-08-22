import React from 'react';
import Button from "./index";

describe('Button', () => {
  test('should render properly', () => {
    const wrapper = shallow(<Button type="primary" block>Click me</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});
