import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Page extends Component {
  static propTypes = {
    pageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    pageNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    activeClass: PropTypes.string,
    pageFetchingClass: PropTypes.string,
    activeLinkClass: PropTypes.string,
    itemClass: PropTypes.string,
    linkClass: PropTypes.string,
    disabledClass: PropTypes.string,
    href: PropTypes.string,
    isFetching: PropTypes.bool
  };

  static defaultProps = {
    activeClass: 'active',
    disabledClass: 'disabled',
    pageFetchingClass: 'page-fetching',
    itemClass: undefined,
    linkClass: undefined,
    activeLinkClass: undefined,
    isActive: false,
    isDisabled: false,
    isFetching: false,
    href: '#'
  };

  handleClick(e) {
    const {
      isDisabled, isFetching, pageNumber, isActive
    } = this.props;
    e.preventDefault();
    if (isDisabled || isFetching || isActive) {
      return;
    }
    this.props.onClick(pageNumber);

    window.scrollTo(0, 50);
  }

  render() {
    const {
      pageText,
      activeClass,
      itemClass,
      linkClass,
      activeLinkClass,
      disabledClass,
      pageFetchingClass,
      isActive,
      isDisabled,
      href,
      isFetching
    } = this.props;

    const css = cx(itemClass, {
      [activeClass]: isActive,
      [disabledClass]: isDisabled,
      [pageFetchingClass]: isFetching
    });

    const linkCss = cx(linkClass, {
      [activeLinkClass]: isActive
    });

    return (
      <li className={css} onClick={this.handleClick.bind(this)}>
        <a className={linkCss} href={href}>
          {pageText}
        </a>
      </li>
    );
  }
}
