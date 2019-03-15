import React, { Component } from 'react';
import { getTabId } from '.';

const Tab = ({ activeTab, onTabChange, label, id }) => (
  <li className={activeTab === id ? 'active' : ''}>
    <a style={{ cursor: 'pointer' }} onClick={() => onTabChange(id)}>{label}</a>
  </li>
);

class NavTabs extends Component {
  getTabId = (label, idx) => {
    const { tabIds } = this.props;

    if (tabIds && tabIds[idx]) {
      return tabIds[idx];
    }
    return getTabId(label);
  };

  render() {
    const { tabLabels, onTabChange, activeTab } = this.props;

    return (
      <ul className="nav nav-tabs">
        {tabLabels.map((label, idx) => {
          const tabId = this.getTabId(label, idx);
          return (
            <Tab
              key={tabId}
              activeTab={activeTab}
              onTabChange={onTabChange}
              label={label}
              id={tabId}
            />
          );
        })}
      </ul>
    );
  }
}

export default NavTabs;
