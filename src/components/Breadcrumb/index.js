import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ history }) => (
  <ol className="breadcrumb">
    {
      history.map((item, index) => {
        if (index === history.length - 1) {
          return (
            <li key={item.title} className="active">{item.title}</li>
          );
        }
        return (
          <li key={item.title}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        );
      })
    }
  </ol>
);

Breadcrumb.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })),
};

Breadcrumb.defaultProps = {
  history: [],
};

export default Breadcrumb;
