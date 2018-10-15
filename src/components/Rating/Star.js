import React from 'react';
import PropTypes from 'prop-types';

export const HALF_STAR = 'fa fa-star-half-o';
export const FULL_STAR = 'fa fa-star';
export const EMPTY_STAR = 'fa fa-star-o';

const Star = ({ type }) => (
	<span>
  	<i className={type} style={{ color: '#FFC43D', fontSize: '16px' }} />&nbsp;
  </span>
);

Star.propTypes = {
  /**
   * The type of the stars
   */
  type: PropTypes.oneOf([HALF_STAR, FULL_STAR, EMPTY_STAR]).isRequired,
};

export default Star;
