import React from 'react';
import PropTypes from 'prop-types';
import Paginator from 'paginator';
import cx from 'classnames';

import Page from './Page';

export default class Pagination extends React.Component {
  static propTypes = {
    totalItemsCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    prevPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    lastPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    firstPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabledClass: PropTypes.string,
    hideDisabled: PropTypes.bool,
    hideNavigation: PropTypes.bool,
    innerClass: PropTypes.string,
    itemClass: PropTypes.string,
    itemClassFirst: PropTypes.string,
    itemClassPrev: PropTypes.string,
    itemClassNext: PropTypes.string,
    itemClassLast: PropTypes.string,
    linkClass: PropTypes.string,
    activeClass: PropTypes.string,
    activeLinkClass: PropTypes.string,
    linkClassFirst: PropTypes.string,
    linkClassPrev: PropTypes.string,
    linkClassNext: PropTypes.string,
    linkClassLast: PropTypes.string,
    hideFirstLastPages: PropTypes.bool,
    getPageUrl: PropTypes.func,
    isFetching: PropTypes.bool
  };

  static defaultProps = {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    isFetching: false,
    activePage: 1,
    prevPageText: '⟨',
    firstPageText: '«',
    nextPageText: '⟩',
    lastPageText: '»',
    innerClass: 'pagination',
    itemClass: undefined,
    linkClass: undefined,
    activeLinkClass: undefined,
    hideFirstLastPages: false,
    getPageUrl: i => '#'
  };

  isFirstPageDisplayed(currentPage, totalPages) {
    const { pageRangeDisplayed } = this.props;

    if (totalPages <= pageRangeDisplayed) {
      return true;
    }

    const median = Math.floor(pageRangeDisplayed / 2);
    return 1 + median >= currentPage;
  }

  isLastPageDisplayed(currentPage, lastPage) {
    const { pageRangeDisplayed } = this.props;

    if (lastPage <= pageRangeDisplayed) {
      return true;
    }

    const median = Math.floor(pageRangeDisplayed / 2);
    return lastPage - median <= currentPage;
  }

  buildPages() {
    const pages = [];
    const {
      itemsCountPerPage,
      pageRangeDisplayed,
      activePage,
      totalItemsCount,
      onChange,
      activeClass,
      itemClass,
      itemClassFirst,
      itemClassLast,
      activeLinkClass,
      disabledClass,
      linkClass,
      linkClassFirst,
      linkClassLast,
      getPageUrl,
      isFetching
    } = this.props;

    const paginationInfo = new Paginator(
      itemsCountPerPage,
      pageRangeDisplayed
    ).build(totalItemsCount, activePage);

    for (
      let i = paginationInfo.first_page;
      i <= paginationInfo.last_page;
      i++
    ) {
      pages.push(
        <Page
          isActive={i === activePage}
          key={i}
          href={getPageUrl(i)}
          pageNumber={i}
          pageText={`${i}`}
          onClick={onChange}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
          isFetching={isFetching}
        />
      );
    }

    if (
      !this.isFirstPageDisplayed(
        paginationInfo.current_page,
        paginationInfo.total_pages
      )
    ) {
      pages.unshift(
        <Page
          key={'dotfirst'}
          pageNumber={0}
          onClick={() => {}}
          pageText={'...'}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
          isFetching={isFetching}
        />
      );
      pages.unshift(
        <Page
          key={'first'}
          pageNumber={1}
          onClick={onChange}
          pageText={'1'}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={cx(itemClass, itemClassFirst)}
          linkClass={cx(linkClass, linkClassFirst)}
          disabledClass={disabledClass}
          isFetching={isFetching}
        />
      );
    }

    if (
      !this.isLastPageDisplayed(
        paginationInfo.current_page,
        paginationInfo.total_pages
      )
    ) {
      pages.push(
        <Page
          key={'dotlast'}
          pageNumber={0}
          onClick={() => {}}
          pageText={'...'}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
          isFetching={isFetching}
        />
      );
      pages.push(
        <Page
          key={'last'}
          pageNumber={paginationInfo.total_pages}
          onClick={onChange}
          pageText={paginationInfo.total_pages.toString()}
          isDisabled={
            paginationInfo.current_page === paginationInfo.total_pages
          }
          itemClass={cx(itemClass, itemClassLast)}
          linkClass={cx(linkClass, linkClassLast)}
          disabledClass={disabledClass}
          isFetching={isFetching}
        />
      );
    }

    return pages;
  }

  render() {
    const pages = this.buildPages();
    return <ul className={this.props.innerClass}>{pages}</ul>;
  }
}
