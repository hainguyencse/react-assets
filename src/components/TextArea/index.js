import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, notes, ...textAreaProps }) => (
  <div className="form-group">
    {label ? <label>{label}</label> : null}
    <textarea
      className="form-control"
      {...textAreaProps}
      style={{ resize: 'vertical' }}
    />
    {notes ? <div className="text-muted">{notes}</div> : null }
  </div>
);

TextArea.propTypes = {
  /**
   * Label of the text area
   */
  label: PropTypes.string,
  notes: PropTypes.node,
};

TextArea.defaultProps = {
  label: '',
};

export default TextArea;
