import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({src}) => (
  <img src={src} className="img-circle" alt="User Image" />
);

Avatar.propTypes = {
  src: PropTypes.string,
};

Avatar.defaultProps = {
  src: ''
};

export default Avatar;
