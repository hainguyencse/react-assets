import React from 'react';
import PropTypes from 'prop-types';

/**
 * Alert show important content to user
 */
const Alert = ({
  title, content, type, onDismiss
}) => {
  let iconName;
  const renderIcon = () => {
    switch (type) {
      case 'warning': {
        iconName = 'fa-warning';
        break;
      }
      case 'danger': {
        iconName = 'fa-ban';
        break;
      }
      default: {
        iconName = 'fa-check';
      }
    }

    return (
      <i className={`icon fa ${iconName}`} />
    );
  };

  return (
    <div className={`alert alert-${type} alert-dismissible`}>
      <button type="button" className="close" onClick={onDismiss}>×</button>
      <h4>
        {renderIcon()}
        {' '}
        {title}
      </h4>
      {content}
    </div>
  );
};

Alert.propTypes = {
  /**
   * Title of Alert
   */
  title: PropTypes.string,
  /**
   * Content displayed in the Alert body
   */
  content: PropTypes.string,
  /**
   * Type of alert
   */
  type: PropTypes.oneOf(['success', 'warning', 'danger']),
  /**
   * Function callback when alert is dismissed
   */
  onDismiss: PropTypes.func,
};

Alert.defaultProps = {
  title: 'Alert',
  content: 'Alert content',
  type: 'success',
  onDismiss: () => {},
};

export default Alert;
