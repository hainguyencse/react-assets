import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";

const Modal = ({ visible, title, children, dismissText, confirmText, onConfirm, onDismiss }) => (
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
        <div className="modal-footer">
          <div className="pull-left">
            <Button onClick={onDismiss}>{dismissText}</Button>
          </div>
          <Button onClick={onConfirm} type="primary">{confirmText}</Button>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  dismissText: PropTypes.string,
  confirmText: PropTypes.string,
  onConfirm: PropTypes.func,
  onDismiss: PropTypes.func,
};

Modal.defaultProps = {
  visible: false,
  title: 'Modal',
  children: <p>Body</p>,
  dismissText: 'Cancel',
  confirmText: 'Confirm',
  onConfirm: () => {},
  onDismiss: () => {},
};

export default Modal;
