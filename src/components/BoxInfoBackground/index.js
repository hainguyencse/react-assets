import React from 'react';
import PropTypes from 'prop-types';

const BoxInfoBackground = ({title, bgColor, number, iconClass, percent }) => (
  <div className={`info-box ${bgColor}`}>
    <span className="info-box-icon">
      <i className={`fa ${iconClass}`}></i>
    </span>
    <div className="info-box-content">
      <span className="info-box-text">{title}</span>
      <span className="info-box-number">{number}</span>
      <div className="progress">
        <div className="progress-bar" style={{width: "70%"}}></div>
      </div>
    </div>
  </div>
);

BoxInfoBackground.propTypes = {
  title: PropTypes.number,
  number: PropTypes.string,
  bgColor: PropTypes.oneOf(['bg-green', 'bg-aqua', 'bg-yellow', 'bg-red']),
  /**
    * fontawesome.com/icons?d=gallery
    */
  iconClass: PropTypes.string,
};

BoxInfoBackground.defaultProps = {
  title: 'Title',
  number: 'Number or text',
  bgColor: 'bg-aqua',
  iconClass: 'fa-envelope-o'
};

export default BoxInfoBackground;
