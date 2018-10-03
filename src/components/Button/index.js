import React from 'react';
import PropTypes from 'prop-types';

/**
 * An ordinary button
 */
const Button = ({ children, block, displayType, size, ...buttonProps }) => (
  <button
    className={`btn ${block ? 'btn-block' : ''} btn-${displayType} ${buttonProps.disabled ? 'disabled' : ''} btn-${size}`}
    {...buttonProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  /**
   * Any elements to display in the button
   */
  children: PropTypes.node,
  /**
   * Toggle block type button
   */
  block: PropTypes.bool,
  /**
   * Type of button
   */
  displayType: PropTypes.oneOf(['default', 'primary', 'warning', 'danger']),
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['nor', 'lg', 'sm', 'xs']),
};

Button.defaultProps = {
  children: null,
  block: false,
  displayType: 'default',
  size: 'nor',
};

export default Button;
