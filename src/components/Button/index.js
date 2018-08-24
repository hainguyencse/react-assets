import React from 'react';
import PropTypes from 'prop-types';

/**
 * An ordinary button
 */
const Button = ({
  children, onClick, block, type, disabled
}) => (
  <button
    type="button"
    className={`btn ${block ? 'btn-block' : ''} btn-${type} ${disabled ? 'disabled' : ''}`}
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
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  block: false,
  disabled: false,
  type: 'default',
};

export default Button;
