import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";

const Modal = ({ visible, title, children, dismissText, confirmText, onConfirm, onDismiss, hideFooter }) => (
  <div
    className={`modal fade ${visible ? 'in' : ''}`}
    style={visible ? { display: 'block', paddingRight: '12px', overflow: 'auto' } : { 'display': 'none' } }>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={onDismiss}>
            <span>×</span></button>
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {hideFooter ? 
          null : (
          <div className="modal-footer">
            <Button onClick={onDismiss}>{dismissText}</Button>
            <Button onClick={onConfirm} displayType="primary">{confirmText}</Button>
          </div>
        )}
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  visible: PropTypes.bool,
  hideFooter: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  dismissText: PropTypes.string,
  confirmText: PropTypes.string,
  onConfirm: PropTypes.func,
  onDismiss: PropTypes.func,
};

Modal.defaultProps = {
  visible: false,
  hideFooter: false,
  title: 'Modal',
  children: <p>Body</p>,
  dismissText: 'Cancel',
  confirmText: 'Confirm',
  onConfirm: () => {},
  onDismiss: () => {},
};

export default Modal;
