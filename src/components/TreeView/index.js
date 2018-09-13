import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import TreeItem from '../TreeItem';

class TreeView extends React.Component {
  state = {
    expanded: false,
  };

  matchBase() {
    const { location, base } = this.props;
    return location.pathname.startsWith(`/${base}`);
  };

  calculateTo(to) {
    const { base } = this.props;

    if (to) {
      return `/${base}/${to}`
    }

    return `/${base}`;
  }

  handleToggleExpand() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    const { expanded } = this.state;
    const { links, base, title, icon } = this.props;

    return (
      <li className={`${this.matchBase() ? 'active' : ''} treeview ${ expanded ? 'menu-open' : '' }`}>
        <a href="#" onClick={this.handleToggleExpand.bind(this)}>
          <i className={`fa ${icon}`} /> <span>{title}</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu" style={{ display: expanded ? 'block' : 'none' }}>
          {
            links.map(link => {
              const linkTo = this.calculateTo(link.to);
              return (
                <TreeItem
                  key={linkTo}
                  to={linkTo}
                  title={link.title}
                  icon={'fa-circle-o'} />
              );
          })}
        </ul>
      </li>
    );
  }
}

TreeView.propTypes = {
  location: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    title: PropTypes.string
  })),
  base: PropTypes.string.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
};

TreeView.defaultProps = {
  links: [],
  title: 'Link Tree',
  icon: 'fa-link',
};

export default withRouter(TreeView);


