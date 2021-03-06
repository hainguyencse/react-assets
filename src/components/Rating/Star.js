import React from 'react';
import PropTypes from 'prop-types';

export const HALF_STAR = 'fa fa-star-half-o';
export const FULL_STAR = 'fa fa-star';
export const EMPTY_STAR = 'fa fa-star-o';

const Star = ({ type, size }) => {
	const renderStars = () => {
    switch (size) {
      case 'lg': {
        return (
        	<span>
				  	<i className={type} style={lgCss} />&nbsp;
				  </span>
	  		);
      }
      case 'md': {
        return (
        	<span>
				  	<i className={type} style={mdCss} />&nbsp;
				  </span>
	  		);
      }
      default:
        return null;
    }   
  };

  return (
  	<span>
	  	{renderStars()}
	  </span>
  );
};

Star.propTypes = {
  /**
   * The type of the stars
   */
  size: PropTypes.oneOf(['md', 'lg']),
  type: PropTypes.oneOf([HALF_STAR, FULL_STAR, EMPTY_STAR]).isRequired,
};

Star.defaultProps = {
  size: 'md',
};

const lgCss = {
  color: '#FFC43D',
  fontSize: '30px'
};

const mdCss = {
  color: '#FFC43D',
  fontSize: '16px'
};

export default Star;
