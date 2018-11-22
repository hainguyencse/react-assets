import React from 'react';
import PropTypes from 'prop-types';

/**
 * Input wraps the html input with additional functions
 * @param label - the label displayed beside the input
 * @param displayType - the visual style of the input
 * @param message - the message to display under the input
 * @param inputProps - additional props supplied to the inner input
 * @returns {*}
 * @constructor
 */
const Input = ({
  label, displayType, message, only, sub, ...inputProps
}) => {
  const renderLabelIcon = () => {
    switch (displayType) {
      case 'success': {
        return <i className="fa fa-check" />;
      }
      case 'warning': {
        return <i className="fa fa-bell-o" />;
      }
      case 'error': {
        return <i className="fa fa-times-circle-o" />;
      }
      default:
        return null;
    }
  };

  const renderLabel = () => (
    label
      ? (
        <label htmlFor="input">
          {renderLabelIcon()}
          {label}
          <span className="text-muted" style={{ fontWeight: normal }}>{sub}</span>
        </label>
      ) : null
  );

  const renderHelpBlock = () => (
    message ? <span className={`help-block col-sm-${label ? 10 : 12}`}>{message}</span> : null
  );

  // TODO: unique id for input
  return (
    <div className={`form-horizontal form-group ${displayType !== 'default' ? `has-${displayType}` : ''} ${only ? 'noMargin' : ''}`}>
      {renderLabel()}
      <input
        id="input"
        className="form-control"
        {...inputProps}
      />
      <div className="row">
        {renderHelpBlock()}
      </div>
    </div>
  );
};

Input.propTypes = {
  /**
   * Label of the input
   */
  label: PropTypes.string,
  /**
   * Visual style of the input
   */
  displayType: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
  /**
   * Additional message to display under the input
   */
  message: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  displayType: 'default',
  message: '',
};

export default Input;
