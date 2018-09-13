import React from 'react';
import PropTypes from 'prop-types';
// import './buttonOutline.css';

/**
 * An ordinary button
 */
const ButtonOutline = ({
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

ButtonOutline.propTypes = {
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

ButtonOutline.defaultProps = {
  children: 'Button',
  onClick: () => {},
  block: false,
  disabled: false,
  type: 'default',
  innerType: 'button',
  size: 'nor',
};

export default ButtonOutline;
