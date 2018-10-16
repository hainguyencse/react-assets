import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TimelineItem = ({ action, body, footer, icon, iconColor }) => {
  const momentTime = moment(action.time);

  return (
    <li>
      {/* <i className={`fa ${icon} ${iconColor}`}/> */}
      <div className="timeline-item" style={{ background: action.bgColor }}>
        <span className="time"><i className="fa fa-clock-o"/> {momentTime.fromNow(true)}</span>
        <h3 className="timeline-header" style={{ fontSize: '14px', border: 'none' }}>
          {action.user} {action.actionName} {action.target}
        </h3>
        {action.body ? <div className="timeline-body">
          {action.body}
        </div> : null}

        {footer ? <div className="timeline-footer">
          {footer}
        </div> : null}
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  action: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    actionName: PropTypes.string,
    target: PropTypes.string,
    body: PropTypes.node,
    /**
     * RFC 2822 time format
     */
    time: PropTypes.string,
    bgColor: PropTypes.string,
  }).isRequired,
  footer: PropTypes.node,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

TimelineItem.defaultProps = {
  footer: null,
  icon: 'fa-cogs',
  iconColor: 'bg-blue',
};

export default TimelineItem;
