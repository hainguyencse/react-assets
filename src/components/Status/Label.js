import React from 'react';
import PropTypes from 'prop-types';

export const colors = {
  RED: 'bg-red',
  GREEN: 'bg-green',
  BLUE: 'bg-blue',
  YELLOW: 'bg-yellow',
  ORANGE: 'bg-orange',
  GREY: 'bg-gray',
};

const Label = ({ text, color }) => <small className={`label ${color}`}>{text}</small>;

Label.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Label.defaultProps = {
  text: 'label',
  color: colors.GREY
};

export default Label;
