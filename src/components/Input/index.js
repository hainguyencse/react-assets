import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * Input wraps the html input with additional functions
 * @param label - the label displayed beside the input
 * @param displayType - the visual style of the input
 * @param message - the message to display under the input
 * @param inputProps - additional props supplied to the inner input
 * @returns {*}
 * @constructor
 */
class Input extends React.Component {
  handleInputChange = (e) => {
    const { formatter, onChange } = this.props;
    const newEvent = { ...e };
    newEvent.target.value = formatter.unformat(e.target.value); // reverse effect of format
    onChange(newEvent);
  };

  renderLabel = () => {
    const { label, sub } = this.props;
    if (label) {
      return (
        <label>
          {label}{' '}
          <span className="text-muted" style={{ fontWeight: 'normal' }}>
            {sub}
          </span>
        </label>
      );
    }
    return null;
  };

  renderHelpBlock = () => {
    const { message, label } = this.props;
    if (message) {
      return (
        <span className={`help-block col-sm-${label ? 10 : 12}`}>
          {message}
        </span>
      );
    }
    return null;
  };

  renderInput = (inputProps) => {
    const { formatter } = this.props;

    // if user does not supply format function
    if (!formatter) { 
      return (
        <input id="input" className="form-control" {...inputProps} />
      );
    }

    const { value, ...rest } = inputProps;
    return <input id="input" className="form-control" value={formatter.format(value)} {...rest} onChange={this.handleInputChange} />;
  };

  render() {
    const {
      label,
      displayType,
      message,
      only,
      sub,
      ...inputProps
    } = this.props;

    return (
      <div
        className={cx('form-horizontal form-group', displayType !== 'default' && `has-${displayType}`, only && 'noMargin')}
      >
        {this.renderLabel()}
        {this.renderInput(inputProps)}
        <div className="row">{this.renderHelpBlock()}</div>
      </div>
    );
  }
}

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
  /**
   * Format/un-format the input (e.g. for numeric purpose)
   */
  formatter: PropTypes.shape({
    format: PropTypes.func,
    unformat: PropTypes.func,
  })
};

Input.defaultProps = {
  label: '',
  displayType: 'default',
  message: '',
};

export default Input;
