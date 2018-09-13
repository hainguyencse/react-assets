import React from 'react';
import PropTypes from 'prop-types';

/**
 * An ordinary button
 */
const Button = ({
  children, onClick, block, type, disabled, innerType, size 
}) => (
  <button
    type={innerType}
    className={`btn ${block ? 'btn-block' : ''} btn-${type} ${disabled ? 'disabled' : ''} btn-${size}`}
    onClick={disabled ? () => {} : onClick}
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
   * Callback when button is clicked
   */
  onClick: PropTypes.func,
  /**
   * Toggle block type button
   */
  block: PropTypes.bool,
  /**
   * Toggle disabled button
   */
  disabled: PropTypes.bool,
  /**
   * Type of button
   */
  type: PropTypes.oneOf(['default', 'primary', 'warning', 'danger']),
  /**
   * Type of underlying button HTML element
   */
  innerType: PropTypes.string,
  size: PropTypes.oneOf(['nor', 'lg', 'sm', 'xs']),
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  block: false,
  disabled: false,
  type: 'default',
  innerType: 'button',
  size: 'nor',
};

export default Button;
