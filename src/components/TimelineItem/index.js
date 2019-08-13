import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Avatar from '../Avatar';

const TimelineItem = ({ action, body, footer, icon, iconColor }) => {
  const momentTime = moment(action.time);

  return (
    <li>
      {action.photoSrc ?
        <Avatar size="small" src={action.photoSrc} />
        :
        <i className="fa" />
      }
      <div className="timeline-item" style={{ background: action.bgColor }}>
        <span className="time"><i className="fa fa-clock-o"/> {momentTime.fromNow(true)}</span>
        <div className="timeline-header" style={{ fontSize: '14px', border: 'none' }}>
          <strong>{action.user}</strong> {action.actionName} {action.target}
        </div>
        {action.body ? <div className="timeline-body">
          {action.body}
        </div> : null}

        {action.extra_data ? <div className="timeline-body">
          <pre>{action.extra_data}</pre>
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
    photoSrc: PropTypes.string,
  }).isRequired,
  footer: PropTypes.node,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

TimelineItem.defaultProps = {
  footer: null,
  icon: null,
  iconColor: 'bg-blue',
};

export default TimelineItem;
