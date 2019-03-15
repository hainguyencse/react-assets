import React from 'react';
import Tabs from './index';
import TabContent from './TabContent';

describe('Tabs', () => {
  test('should render properly', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Tabs tabLabels={['Tab 1', 'Tab 2']} />);

    // eslint-disable-next-line
    expect(wrapper).toMatchSnapshot();
  });

  test('should render right number of tabs', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<Tabs tabLabels={['Tab 1', 'Tab 2']} />);

    expect(
      wrapper
        .find('NavTabs')
        .dive()
        .find('Tab')
    ).toHaveLength(2);
  });

  test('should render active tab properly', () => {
    // eslint-disable-next-line
    const wrapper = mount(
      <Tabs tabLabels={['Tab 1', 'Tab 2']} activeTab="tab 2">
        <TabContent tabId="tab 1" component={() => <div />} />
        <TabContent tabId="tab 2" component={() => <div />} />
      </Tabs>
    );

    expect(
      wrapper
        .find('Tab')
        .find({ id: 'tab 2' })
        .find('li')
        .hasClass('active')
    ).toEqual(true);

    expect(
      wrapper
        .find('TabContent')
        .find({ tabId: 'tab 2' })
        .find('.tab-pane')
        .hasClass('active')
    ).toEqual(true);

    wrapper.unmount();
  });
});
