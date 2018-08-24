import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ currentPage, history }) => (
  <ol class="breadcrumb">
    {
      history.map(item =>(
        <li key={item.itemText}>
          <a href={item.itemUrl}>{item.itemText}</a>
        </li>
      ))
    }
    <li className="active">{currentPage}</li>
  </ol>
);

Breadcrumb.propTypes = {
  currentPage: PropTypes.string,
  history: PropTypes.array
};


export default Breadcrumb;
