import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const isActive = (location, to) => {
  if (to === '/') {
    return location.pathname === to;
  }

  return location.pathname.startsWith(to);
};

const CustomLink = ({ location, to, children }) => (
  <li className={isActive(location, to) ? 'active' : undefined}>
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
