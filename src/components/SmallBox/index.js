import React from 'react';
import PropTypes from 'prop-types';

const SmallBox = ({ number, title, bgColor, iconClass }) => (
  <div className={`small-box ${bgColor}`}>
    <div className="inner">
      <h3>{number}</h3>
      <p>{title}</p>
    </div>
    <div className="icon">
      <i className={`fa ${iconClass}`}></i>
    </div>
    <a href="#" className="small-box-footer">
      More info <i className="fa fa-arrow-circle-right"></i>
    </a>
  </div>
);

SmallBox.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
  bgColor: PropTypes.oneOf(['bg-green', 'bg-aqua', 'bg-yellow', 'bg-red']),
  /**
    * fontawesome.com/icons?d=gallery
    */
  iconClass: PropTypes.string,
};

SmallBox.defaultProps = {
  title: 'Title',
  number: 'Number or text',
  bgColor: 'bg-aqua',
  iconClass: 'fa-shopping-cart'
};

export default SmallBox;
