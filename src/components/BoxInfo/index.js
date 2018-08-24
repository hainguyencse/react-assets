import React from 'react';
import PropTypes from 'prop-types';

const BoxInfo = ({ number, title, bgColor, iconClass, fill }) => (
  <div className={`info-box ${fill ? `${bgColor}` : ''}`}>
    <span className={`info-box-icon ${fill ? '' : `${bgColor}`}`}>
      <i className={`fa ${iconClass}`}></i>
    </span>
    <div className="info-box-content">
      <span className="info-box-text">{title}</span>
      <span className="info-box-number">{number}</span>
    </div>
  </div>
);

BoxInfo.propTypes = {
  title: PropTypes.number,
  number: PropTypes.string,
  bgColor: PropTypes.oneOf(['bg-green', 'bg-aqua', 'bg-yellow', 'bg-red']),
  /**
    * fontawesome.com/icons?d=gallery
    */
  iconClass: PropTypes.string,
  fill: PropTypes.bool,
};

BoxInfo.defaultProps = {
  title: 'Title',
  number: 'Number or text',
  bgColor: 'bg-aqua',
  iconClass: 'fa-envelope-o',
  fill: false,
};

export default BoxInfo;
