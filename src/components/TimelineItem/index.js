import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TimelineItem = ({ action, body, footer, icon, iconColor }) => {
  const momentTime = moment(action.time);

  return (
    <li>
      <i className={`fa ${icon} ${iconColor}`}/>
      <div className="timeline-item">
        <span className="time"><i className="fa fa-clock-o"/> {momentTime.fromNow(true)}</span>
        <h3 className="timeline-header" style={{ fontSize: '14px' }}>
          <a href="#">{action.user}</a> {action.actionName} {action.target}
        </h3>
        {body ? <div className="timeline-body">
          {body}
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
    /**
     * RFC 2822 time format
     */
    time: PropTypes.string,
  }).isRequired,
  body: PropTypes.node,
  footer: PropTypes.node,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

TimelineItem.defaultProps = {
  body: null,
  footer: null,
  icon: 'fa-cogs',
  iconColor: 'bg-blue',
};

export default TimelineItem;
