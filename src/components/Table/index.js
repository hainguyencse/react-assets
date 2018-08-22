import React from 'react';
import PropTypes from 'prop-types';
import uuid_v4 from 'uuid/v4';

const Table = ({data, hideHeader, customHeader}) => {
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
        {
          (customHeader || headers).map(header => (
            <th key={header}>{header}</th>
          ))
        }
      </tr> : null
  );

  const renderDataRow = datum => headers.map(header => (
    <td key={uuid_v4()}>
      {datum[header] || 'undefined'}
    </td>
  ));

  const renderData = () => data.map(datum => (
    <tr key={uuid_v4()}>
      {renderDataRow(datum)}
    </tr>
  ));

  return (
    <div className="box-body table-responsive no-padding">
      <table className="table table-hover">
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
};

Table.defaultProps = {
  data: [],
  hideHeader: false,
  customHeader: null,
};

export default Table;
