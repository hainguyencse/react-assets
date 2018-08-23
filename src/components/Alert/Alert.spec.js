import React from 'react';
import Alert from '.';

describe('Alert', () => {
  test('should render properly', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Alert title="Alert" type="success" content="Success"/>);

    expect(wrapper).toMatchSnapshot();
  });
});
