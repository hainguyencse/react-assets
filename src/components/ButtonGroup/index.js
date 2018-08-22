import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({ children, vertical }) => (
  <div className={`btn-group${vertical ? '-vertical' : ''}`}>
    {children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  children: null,
  vertical: false,
};

export default ButtonGroup;
