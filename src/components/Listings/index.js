import React from 'react';
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
  onTagOpen,
  noHeader,
  page,
  dataCount,
  itemsPerPage,
  onPageChange,
  pageRange,
  isFetching,
  onSortHeader,
  sortParams,
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
              <Button displayType="danger" disabled>
                <i className="fa fa-trash-o" />
                {' '}
Delete Selected
              </Button>
&nbsp;&nbsp;
              <Button displayType="primary" onClick={onTagOpen} disabled>
                <i className="fa fa-tag" />
                {' '}
Tag
              </Button>
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
   * ListingsProps
   */
  listingsTitle: PropTypes.string,
  noHeader: PropTypes.bool,
  page: PropTypes.number,
  dataCount: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
  pageRange: PropTypes.number,
  isFetching: PropTypes.bool,
  /**
   * TableProps
   */
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  selectable: PropTypes.bool,
  onItemSelect: PropTypes.func,
  onTagOpen: PropTypes.func,
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
  onTagOpen: () => {},
  onSortHeader: () => {},
  actions: [],
};

export default Listings;
