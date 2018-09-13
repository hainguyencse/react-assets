import React from 'react';
import PropTypes from 'prop-types';

const TimelineLabel = ({ date, color }) => (
  <li className="time-label">
    <span className={color}>
      {date}
    </span>
  </li>
);

TimelineLabel.propTypes = {
  date: PropTypes.string,
  color: PropTypes.string,
};

TimelineLabel.defaultProps = {
  date: '10 Feb. 2014',
  color: 'bg-gray'
};

export default TimelineLabel;
