import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, ...textAreaProps }) => (
  <div className="form-group">
    {label ? <label>{label}</label> : null}
    <textarea
      className="form-control"
      {...textAreaProps}
      style={{ resize: 'vertical' }}
    />
  </div>
);

TextArea.propTypes = {
  /**
   * Label of the text area
   */
  label: PropTypes.string,
};

TextArea.defaultProps = {
  label: '',
};

export default TextArea;
