import React from 'react';
import PropTypes from 'prop-types';

class Box extends React.Component {
  state = {
    expanded: true,
  };

  handleExpandClick() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  renderLabel() {
    const { label } = this.props;

    return (
      label ? <span className="label label-primary">{label}</span> : null
    );
  }

  renderCollapseBtn() {
    const { collapsible } = this.props;
    const { expanded } = this.state;

    if (collapsible) {
      return (
        <button type="button" className="btn btn-box-tool" onClick={this.handleExpandClick.bind(this)}>
          <i className={`fa fa-${expanded ? 'minus' : 'plus'}`}/>
        </button>
      );
    }

    return null;
  }

  renderTitle() {
    const { title } = this.props;

    return (
      <h3 className="box-title">{title}</h3>
    );
  }

  renderHeader() {
    return (
      <div className="box-header with-border">
        {this.renderTitle()}
        <div className="box-tools pull-right">
          {this.renderLabel()}
          {this.renderCollapseBtn()}
        </div>
      </div>
    );
  }

  renderBody() {
    const { body, children } = this.props;
    const { expanded } = this.state;

    if (children) {
      return (
        <div className="box-body" style={{ display: expanded ? '' : 'none' }}>
          {children}
        </div>
      );
    } else if (body) {
      return body;
    } else {
      return null;
    }
  };

  renderFooter() {
    const { footer } = this.props;

    return (
      footer ? <div className="box-footer">
        {footer}
      </div> : null
    );
  }

  renderLoading() {
    const { isLoading } = this.props;

    return (
      isLoading ? <div className="overlay">
        <i className="fa fa-refresh fa-spin"/>
      </div> : null
    );
  }

  render() {
    const { noHeader, displayType } = this.props;

    return (
      <div className={`box box-${displayType}`}>
        {noHeader ? null : this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
        {this.renderLoading()}
      </div>
    );
  }
}

Box.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  footer: PropTypes.node,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  noHeader: PropTypes.bool,
  body: PropTypes.node,
  collapsible: PropTypes.bool,
  displayType: PropTypes.oneOf(['default', 'primary', 'info', 'warning', 'success', 'danger']),
};

Box.defaultProps = {
  title: 'Box',
  label: '',
  footer: null,
  children: null,
  isLoading: false,
  noHeader: false,
  body: null,
  collapsible: false,
  displayType: 'default',
};

export default Box;
