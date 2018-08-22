import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, block, type, disabled }) => (
  <button
    type="button" className={`btn ${block ? 'btn-block' : ''} btn-${type} ${disabled ? 'disabled' : ''}`}
    onClick={disabled ? () => {} : onClick }>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'primary', 'warning', 'danger']),
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  block: false,
  disabled: false,
  type: 'default',
};

export default Button;
