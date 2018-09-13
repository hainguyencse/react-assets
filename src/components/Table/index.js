import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import Button from '../Button';

const verticalStyle = { verticalAlign: 'middle', whiteSpace: 'nowrap' };

const Table = ({ data, hideHeader, customHeader, selectable, onItemSelect, actions }) => {
  const generateHeader = () => {
    if (data.length === 0) {
      return [];
    }

    const firstRow = data[0];
    return Object.keys(firstRow);
  };

  const headers = generateHeader();

  const renderHeader = () => (
    !hideHeader ?
      <tr>
        { selectable ? <th style={{...verticalStyle, width: 10}}>
          <Checkbox />
        </th> : null }
        {
          (customHeader || headers).map(header => (
            <th key={header} style={verticalStyle}>{header}</th>
          ))
        }
        { actions.length > 0 ? <th style={verticalStyle}>Actions</th> : null }
      </tr> : null
  );

  const handleSelectItem = (item, e) => {
    onItemSelect(item, e.target.checked);
  };

  const handleExecuteAction = (item, callback) => {
    callback(item);
  };

  const renderData = () => data.map(datum => (
    <tr key={datum.id || undefined}>
      { selectable ? <td style={{ ...verticalStyle, width: 10 }}>
        <Checkbox onChange={handleSelectItem.bind(null, datum)} />
      </td> : null }

      {
        headers.map(header => (
          <td key={datum.id ? `${datum.id}_${header}` : undefined} style={verticalStyle}>
            {datum[header] || 'undefined'}
          </td>
          )
        )
      }

      { actions.length > 0 ?
        <td style={verticalStyle}>
          {actions.map((action, index) =>
            <span
              key={datum.id ? `${datum.id}_${action.title}` : undefined}
              style={{ paddingLeft: index > 0 ? 10 : 0, paddingBottom: 5, display: 'inline-block' }}>
              <Button
                onClick={handleExecuteAction.bind(null, datum, action.callback)}
                type={action.type}
                size={action.size}>
                {action.title}
              </Button>
            </span>
          )}
        </td>
        : null }
    </tr>
  ));

  return (
    <div className="box-body table-responsive no-padding">
      <table className="table table-hover table-striped">
        <tbody>
          {renderHeader()}
          {renderData()}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  hideHeader: PropTypes.bool,
  customHeader: PropTypes.array,
  selectable: PropTypes.bool,
  onItemSelect: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    callback: PropTypes.func,
    type: PropTypes.oneOf(['default', 'primary', 'danger']),
  })),
};

Table.defaultProps = {
  data: [],
  hideHeader: false,
  customHeader: null,
  selectable: false,
  onItemSelect: () => {},
  actions: [],
};

export default Table;
