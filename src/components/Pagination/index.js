import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({pages}) => (
  <ul className="pagination pagination-sm no-margin">
    {pages.map(page => (
      <li key={page.pageText}>
        <a href={page.pageUrl}>{page.pageText}</a>
      </li>
    ))}
  </ul>
);

Pagination.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    pageText: PropTypes.string,
    pageUrl: PropTypes.string,
  })),
};

Pagination.defaultProps = {
  pages: [],
};

export default Pagination;
