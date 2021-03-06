import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TimelineLabel from '../TimelineLabel';
import TimelineItem from '../TimelineItem';


const Timeline = ({ actionHistory }) => {
  let previousDate;

  const parseTimeToDate = (time) => {
    return moment(time).format('MMM DD, YYYY');
  };

  return (
    <ul className="timeline">
      { actionHistory.map(action => {
        const parsedTime = parseTimeToDate(action.time);
        if (parsedTime !== previousDate) {
          previousDate = parsedTime;
          return (
            <React.Fragment key={action.id}>
              <TimelineLabel date={previousDate} />
              <TimelineItem action={action}/>
            </React.Fragment>
          );
        }
        return <TimelineItem key={action.id} action={action}/>;
      })}
    </ul>
  );
};

Timeline.propTypes = {
  actionHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    actionName: PropTypes.string,
    target: PropTypes.string,
    body: PropTypes.node,
    /**
     * RFC 2822 time format
     */
    time: PropTypes.string,
  })),
};

Timeline.defaultProps = {
  actionHistory: [],
};

export default Timeline;
