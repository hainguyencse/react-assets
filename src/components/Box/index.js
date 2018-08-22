import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children, body, footer, label, title, isLoading }) => {

  const renderLabel = () => (
    label ? <div className="box-tools pull-right">
      <span className="label label-primary">{label}</span>
    </div> : null
  );

  const renderBody = () => {
    if (children) {
      return (
        <div className="box-body">
          {children}
        </div>
      );
    } else if (body) {
      return body;
    } else {
      return null;
    }
  };

  const renderFooter = () => (
    footer ? <div className="box-footer">
        {footer}
      </div> : null
  );

  const renderLoading = () => (
      isLoading ? <div className="overlay">
        <i className="fa fa-refresh fa-spin"/>
      </div> : null
  );

  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">{title}</h3>
        {renderLabel()}
      </div>

      {renderBody()}
      {renderFooter()}
      {renderLoading()}
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  footer: PropTypes.node,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  body: PropTypes.node,
};

Box.defaultProps = {
  title: 'Box',
  label: '',
  footer: null,
  children: null,
  isLoading: false,
  body: null,
};

export default Box;
