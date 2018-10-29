import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import Label, { colors } from './Label';

const Status = ({ state, statuses }) => {
  if (!state || !statuses[state]) {
    return <Label text="Unknown" color={colors.GREY} />;
  }

  if (statuses[state].tooltipMessage) {
    return (
      <Tooltip
        position="top"
        message={statuses[state].tooltipMessage}
      >
        <Label text={statuses[state].title} color={statuses[state].color} />
      </Tooltip>
    );
  }

  return <Label text={statuses[state].title} color={statuses[state].color} />;
};

Status.colors = colors;

Status.propTypes = {
  /**
   * The current state
   */
  state: PropTypes.string,
  /**
   * Statuses contains config of each status
   * Only show tooltip if status has tooltipMessage
   */
  statuses: PropTypes.object,
};

export default Status;
