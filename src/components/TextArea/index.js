import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, notes, sub, name, errors, touched, ...textAreaProps }) => (
  <div className="form-group">
    {label ? <label>{label} <span className="text-muted" style={{ fontWeight: 'normal' }}>{sub}</span></label> : null}
    <textarea
      className="form-control"
      {...textAreaProps}
      style={{ resize: 'vertical' }}
    />
    {errors[name] && touched[name]
      ? (
        <div className="form-horizontal form-group has-error">
          <span className="help-block">{errors[name]}</span>
        </div>
      ) : null}
    {notes ? <div className="text-muted">{notes}</div> : null }
  </div>
);

TextArea.propTypes = {
  /**
   * Label of the text area
   */
  label: PropTypes.string,
  notes: PropTypes.node,
  sub: PropTypes.string,
};

TextArea.defaultProps = {
  label: '',
  sub: '',
};

export default TextArea;
