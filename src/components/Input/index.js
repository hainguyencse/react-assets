import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, value, disabled, label, type, message, onChange }) => {
  const renderLabelIcon = () => {
    switch (type) {
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
    label ?
      <label className="control-label col-sm-2" htmlFor="input">
        {renderLabelIcon()}
        {label}
      </label> : null
  );

  const renderHelpBlock = () => (
    message ? <span className="help-block">{message}</span> : null
  );

  return (
    <div className={`form-horizontal form-group ${type !== 'default' ? `has-${type}` : ''}`}>
      <div className="row">
        {renderLabel()}
        <div className={`col-sm-${label ? 10 : 12}`}>
          <input
            id="input"
            className="form-control"
            placeholder={placeholder}
            type="text"
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="row">{renderHelpBlock()}</div>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
  message: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  disabled: false,
  label: '',
  type: 'default',
  message: '',
  onChange: () => {},
};

export default Input;
