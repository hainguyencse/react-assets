import React from 'react';
import PropTypes from 'prop-types';
import NavTabs from './NavTabs';

export const TabContext = React.createContext();

export const getTabId = tabLabel => tabLabel.toLowerCase();

const Tabs = ({ tabLabels, tabIds, onTabChange, activeTab, defaultTab, children }) => (
  <div className="nav-tabs-custom">
    <NavTabs
      tabLabels={tabLabels}
      tabIds={tabIds}
      onTabChange={onTabChange}
      activeTab={activeTab || defaultTab}
    />
    <TabContext.Provider value={activeTab || defaultTab}>
      <div className="tab-content">{children}</div>
    </TabContext.Provider>
  </div>
);

Tabs.propTypes = {
  /**
   * Labels of tabs
   */
  tabLabels: PropTypes.arrayOf(PropTypes.string),
  /**
   * Ids of tabs --> must be the same length with labels
   * If not provided --> use getTabId()
   */
  tabIds: PropTypes.arrayOf(PropTypes.string),
  /**
   * Callback that receives the target tabId
   */
  onTabChange: PropTypes.func,
  /**
   * Id of the active tab
   */
  activeTab: PropTypes.string,
  /**
   * Id of the tab to open when activeTab does not exist
   */
  defaultTab: PropTypes.string,
};

export default Tabs;
