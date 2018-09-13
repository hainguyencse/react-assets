import React from 'react';
import PropTypes from 'prop-types';
import CustomLink from '../CustomLink';

const TreeItem = ({ to, title, icon }) => (
  <CustomLink to={to}>
    <i className={`fa ${icon}`} />
    <span>{title}</span>
  </CustomLink>
);

TreeItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
};

TreeItem.defaultProps = {
  title: 'Link',
  icon: 'fa-link',
};

export default TreeItem;
