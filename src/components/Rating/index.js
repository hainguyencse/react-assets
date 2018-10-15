import React from 'react';
import PropTypes from 'prop-types';
import Star, { EMPTY_STAR, FULL_STAR, HALF_STAR } from './Star';

/**
 * Rating displays stars based on the rating number provided
 * @param rating - The rating number
 */
const Rating = ({ rating, size }) => {
  const stars = [];

  const fulls = Math.floor(rating);
  for (let i = 0; i < fulls; i += 1) {
    stars.push(FULL_STAR);
  }

  const remain = rating - fulls;
  if (remain < 0.25) {
    if (remain > 0) {
      stars.push(EMPTY_STAR);
    }
  } else if (remain < 0.75) {
    stars.push(HALF_STAR);
  } else {
    stars.push(FULL_STAR);
  }

  for (let i = stars.length; i < 5; i += 1) {
    stars.push(EMPTY_STAR);
  }

  return stars.map(star => (
    <Star type={star} size={size} />
  ));
};

Rating.propTypes = {
  /**
   * The rating number of the component
   */
  rating: PropTypes.number.isRequired,
  size: PropTypes.string,
};

export default Rating;
