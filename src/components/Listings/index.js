import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Pagination, Button } from '../index';

const mockPages = [
  { pageText: '1', pageUrl: '#' },
  { pageText: '2', pageUrl: '#' },
  { pageText: '3', pageUrl: '#' },
  { pageText: '4', pageUrl: '#' },
];

const Listings = ({ listingsTitle, data, customHeader, selectable, onItemSelect, actions, onTagOpen, noHeader }) => (
  <Box
    title={listingsTitle}
    body={
      <Table
        data={data}
        customHeader={customHeader}
        selectable={selectable}
        onItemSelect={onItemSelect}
        actions={actions}
      />
    }
    footer={
      <div>
        {selectable ?
          <div className="pull-left">
            <Button type="danger" disabled><i className="fa fa-trash-o"></i> Delete Selected</Button>&nbsp;&nbsp;
            <Button type="primary" onClick={onTagOpen} disabled><i className="fa fa-tag"></i> Tag</Button>
          </div> : null}
        <div className="pull-right">
          <div className="text-right">
            <Pagination pages={mockPages} />
          </div>
          <div style={{ clear: 'both', color: '#b5bbc8' }}><small>Showing 1 - 50 of total 3,459 found</small></div>
        </div>
      </div>
    }
  />
);

Listings.propTypes = {
  listingsTitle: PropTypes.string,
  data: PropTypes.array,
  customHeader: PropTypes.array,
  selectable: PropTypes.bool,
  noHeader: PropTypes.bool,
  onItemSelect: PropTypes.func,
  onTagOpen: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    callback: PropTypes.func,
    type: PropTypes.oneOf(['default', 'primary', 'danger']),
  })),
};

Listings.defaultProps = {
  listingsTitle: null,
  data: [],
  customHeader: null,
  selectable: false,
  noHeader: false,
  onItemSelect: () => {},
  actions: [],
};

export default Listings;
