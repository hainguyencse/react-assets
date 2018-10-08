import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Table from '../Table';
import Button from '../Button';
import Pagination from '../Pagination';

const Listings = ({
  listingsTitle,
  data,
  columns,
  selectable,
  onItemSelect,
  actions,
  noHeader,
  page,
  dataCount,
  itemsPerPage,
  onPageChange,
  pageRange,
  isFetching,
  onSortHeader,
  sortParams,
  bulkActions,
}) => (
  <Box
    title={listingsTitle}
    body={(
      <Table
        data={data}
        columns={columns}
        selectable={selectable}
        onItemSelect={onItemSelect}
        actions={actions}
        onSortHeader={onSortHeader}
        sortParams={sortParams}
      />
)}
    footer={(
      <div>
        {selectable
          ? (
            <div className="pull-left">
              {
                bulkActions.map(action => (
                  <Fragment key={action.title}>
                    <Button
                      onClick={() => {}}
                      displayType={action.type}
                      data-toogle="tooltip"
                      title={action.title}
                    >
                      {action.render()}
                    </Button>
                    &nbsp;&nbsp;
                  </Fragment>
                ))
              }
            </div>
          ) : null}
        <div className="pull-right">
          <div className="text-right">
            <Pagination
              activePage={page}
              totalItemsCount={dataCount}
              itemsCountPerPage={itemsPerPage}
              onChange={pageNumber => onPageChange(pageNumber)}
              pageRangeDisplayed={pageRange}
              isFetching={isFetching}
              innerClass="pagination no-margin pull-right"
              itemClass="pagination_button"
            />
          </div>
          <div style={{ clear: 'both', color: '#b5bbc8' }}>
            <small>
Showing
              {(itemsPerPage * (page - 1)) + 1}
              {' '}
-
              {
                itemsPerPage * page > dataCount ? dataCount : itemsPerPage * page
              }
              {' '}
of total
              {dataCount}
              {' '}
found
            </small>
          </div>
        </div>
      </div>
)}
    noHeader={noHeader}
    isLoading={isFetching}
  />
);

Listings.propTypes = {
  /**
   * The title appearing on top the the listing
   */
  listingsTitle: PropTypes.string,
  /**
   * Whether to show the listing title
   */
  noHeader: PropTypes.bool,
  /**
   * The current page of the data
   */
  page: PropTypes.number,
  /**
   * Total number of data retreived
   */
  dataCount: PropTypes.number,
  /**
   * Number of items displayed in one page
   */
  itemsPerPage: PropTypes.number,
  /**
   * Callback for page change event
   */
  onPageChange: PropTypes.func,
  /**
   * Number of page link to display
   */
  pageRange: PropTypes.number,
  /**
   * Whether the listing is loading
   */
  isFetching: PropTypes.bool,
  /**
   * Actions to be displayed in the bottom of the listing
   */
  bulkActions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    render: PropTypes.func.isRequired,
    callback: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['default', 'primary', 'danger']),
  })),
  /**
   * TableProps. See Table component
   */
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  selectable: PropTypes.bool,
  onItemSelect: PropTypes.func,
  onSortHeader: PropTypes.func,
  sortParams: PropTypes.object,
  actions: PropTypes.array,
};

Listings.defaultProps = {
  listingsTitle: null,
  noHeader: false,
  page: 0,
  dataCount: 0,
  itemsPerPage: 0,
  onPageChange: () => {},
  pageRange: 0,
  isFetching: false,
  data: [],
  selectable: false,
  onItemSelect: () => {},
  onSortHeader: () => {},
  actions: [],
  bulkActions: [],
};

export default Listings;
