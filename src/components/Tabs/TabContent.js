import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TabContext } from '.';

const TabContent = ({ tabId, component: Component, ...rest }) => (
  <TabContext.Consumer>
    {activeTab => (
      <div className={cx(['tab-pane', activeTab === tabId && 'active'])}>
        <Component {...rest} />
      </div>
    )}
  </TabContext.Consumer>
);

TabContent.propTypes = {
  /**
   * Id of the tab content
   * Must exist in the list of ids provided to tab
   */
  tabId: PropTypes.string.isRequired,
  /**
   * The component to render inside
   */
  component: PropTypes.func.isRequired,
};

export default TabContent;
