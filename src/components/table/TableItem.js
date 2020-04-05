import React from 'react';
import PropTypes from 'prop-types';

const TableItem = ({item, index, getRowData}) => {
  return (
    <tr onClick={() => getRowData(item)}>
      <td>{index + 1}</td>
      <td>{item.FROMSYMBOL}</td>
      <td className={item.FLAGS === 1 ? 'up' : 'down'}>$ {item.PRICE}</td>
      <td>{item.LASTVOLUME}</td>
      <td>{item.MARKET}</td>
    </tr>
  )
};

TableItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default TableItem;