import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder, value, disabled, label, type, inputType, message, autoComplete, subText, onChange
}) => {
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
    label
      ? (
        <label htmlFor="input">
          {renderLabelIcon()}
          {label}
        </label>
      ) : null
  );

  const renderHelpBlock = () => (
    message ? <span className={`help-block col-sm-${label ? 10 : 12}`}>{message}</span> : null
  );

  return (
    <div className={`form-horizontal form-group ${type !== 'default' ? `has-${type}` : ''}`}>
      {renderLabel()}
      <input
        id="input"
        className="form-control"
        placeholder={placeholder}
        type={inputType}
        value={value}
        disabled={disabled}
        onChange={onChange}
        autoComplete={autoComplete ? 'on' : 'off'}
      />
      <span>{subText}</span>
      <div className="row">
        {label ? <span className="col-sm-2" /> : null}
        {renderHelpBlock()}
      </div>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  subText: PropTypes.string,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.bool,
  label: PropTypes.string,
  inputType: PropTypes.oneOf(['text', 'password']),
  type: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
  message: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  subText: '',
  value: undefined,
  disabled: false,
  autoComplete: false,
  label: '',
  type: 'default',
  inputType: 'text',
  message: '',
  onChange: () => {},
};

export default Input;
