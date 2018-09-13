import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const CustomLink = ({ location, to, children }) => (
  <li className={location.pathname === to ? 'active' : undefined}>
    <Link to={to}>
      {children}
    </Link>
  </li>
);

CustomLink.propTypes = {
  location: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

CustomLink.defaultProps = {
  children: null,
};

export default withRouter(CustomLink);
