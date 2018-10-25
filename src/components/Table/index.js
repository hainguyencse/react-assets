import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../CheckBox';
import Button from '../Button';

export const ASCENDING = 'asc';
export const DESCENDING = 'desc';

const verticalStyle = { verticalAlign: 'middle', whiteSpace: 'nowrap' };

const flipDirection = (direction) => {
  if (direction === ASCENDING) {
    return DESCENDING;
  }
  return ASCENDING
};

class Table extends React.Component {
  handleSelectItem = (item, e) => {
    this.props.onItemSelect(item, e.target.checked);
  };

  handleExecuteAction = (item, callback) => {
    callback(item);
  };

  handleHeaderClick = ({ field, isSorted, sortDirection }, e) => {
    const { onSortHeader } = this.props;

    e.preventDefault();

    onSortHeader({
      sortBy: field,
      sortDirection: isSorted ? flipDirection(sortDirection) : ASCENDING,
    });
  };

  renderHeader() {
    const { hideHeader, selectable, actions, sortParams, columns } = this.props;

    let sortBy = '';
    let sortDirection = ASCENDING;
    if (sortParams) {
      sortBy = sortParams.sortBy;
      sortDirection = sortParams.sortDirection;
    }

    if (hideHeader) {
      return null;
    }

    return (
      <tr>
        {
          selectable ?
            <th style={{...verticalStyle }}>
              <div style={{ height: 5, position: 'relative', top: -15 }}>
                <Checkbox />
              </div>
            </th> :
            null
        }
        {
          columns.map(col => (
            <th
              key={col.id}
              className={col.notSortable ? '' : `sorting${sortBy === col.id ? `_${sortDirection}` : ''}`}
              style={verticalStyle}
              onClick={col.notSortable ?
                () => {} :
                this.handleHeaderClick.bind(null, {
                  field: col.id,
                  isSorted: sortBy === col.id,
                  sortDirection })}>
              {col.title}
            </th>
          ))
        }
        { actions.length > 0 ? <th style={verticalStyle}>Actions</th> : null }
      </tr>
    );
  }

  renderRow(datum) {
    const { columns } = this.props;

    return columns.map(col => (
      <td key={col.id} style={verticalStyle}>
        {col.render(datum)}
      </td>
      )
    );
  }

  renderActions(datum) {
    const { actions } = this.props;

    return (
      actions.length > 0 ?
        <td style={verticalStyle}>
          {actions.map((action, index) =>
            <span
              key={action.title}
              style={{ paddingLeft: index > 0 ? 10 : 0, paddingBottom: 5, display: 'inline-block' }}>
              <Button
                onClick={this.handleExecuteAction.bind(null, datum, action.callback)}
                displayType={action.type}
                size="xs"
                data-toogle="tooltip"
                title={action.title}
              >
                {action.render()}
              </Button>
            </span>
          )}
        </td>
        : null
    );
  }

  renderData() {
    const { selectable, data } = this.props;

    return data.map(datum => (
      <tr key={datum.id || undefined}>
        { selectable ? <td style={{ ...verticalStyle, width: 10 }}>
          <Checkbox onChange={this.handleSelectItem.bind(null, datum)} />
        </td> : null }

        {this.renderRow(datum)}

        {this.renderActions(datum)}
      </tr>
    ));
  }

  render() {
    return (
      <div className="box-body table-responsive no-padding">
        <table className="table dataTable">
          <thead>
            {this.renderHeader()}
          </thead>
          <tbody>
            {this.renderData()}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  /**
   * The data supplied to the table
   */
  data: PropTypes.array,
  /**
   * Whether to show the headers
   */
  hideHeader: PropTypes.bool,
  /**
   * Column configuration array
   */
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    notSortable: PropTypes.bool,
  })).isRequired,
  /**
   * Whether each item is selectable
   */
  selectable: PropTypes.bool,
  /**
   * Callback for the item select event
   */
  onItemSelect: PropTypes.func,
  /**
   * Actions to be displayed on each item row
   */
  actions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    render: PropTypes.func.isRequired,
    callback: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['default', 'primary', 'danger']),
  })),
  /**
   * Callback for the sort event
   */
  onSortHeader: PropTypes.func,
  /**
   * The params to configure which header to sort
   */
  sortParams: PropTypes.shape({
    sortBy: PropTypes.string,
    sortDirection: PropTypes.oneOf([ASCENDING, DESCENDING]),
  }),
};

Table.defaultProps = {
  data: [],
  hideHeader: false,
  selectable: false,
  onItemSelect: () => {},
  actions: [],
  onSortHeader: () => {},
};

export default Table;
