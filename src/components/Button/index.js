import React from 'react';
import PropTypes from 'prop-types';

/**
 * An ordinary button
 */
const Button = ({ children, block, displayType, size, type, ...buttonProps }) => (
  <button
    className={`btn ${block ? 'btn-block' : ''} btn-${displayType} ${buttonProps.disabled ? 'disabled' : ''} btn-${size}`}
    type={type}
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
   * Display type of the button
   */
  displayType: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  /**
   * Type of the underlying button
   */
  type: PropTypes.string,
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['nor', 'lg', 'sm', 'xs']),
};

Button.defaultProps = {
  children: null,
  block: false,
  displayType: 'default',
  type: 'button',
  size: 'nor',
};

export default Button;
