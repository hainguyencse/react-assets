import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ visible, position, text }) => (
  <div className={`tooltip fade ${position} ${visible ? 'in' : ''}`} role="tooltip">
    <div className="tooltip-arrow"></div> 
    <div className="tooltip-inner">{text}</div> 
  </div>
);

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  visible: PropTypes.bool,
  text: PropTypes.string,
};

Tooltip.defaultProps = {
  position: 'top',
  visible: false,
  text: 'Text'
};

export default Tooltip;
