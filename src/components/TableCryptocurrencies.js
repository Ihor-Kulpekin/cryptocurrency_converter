import React from 'react';
import PropTypes from 'prop-types';

import ListTableItems from './ListTableItems';
import '../scss/table.scss'
import '../scss/global.scss'

const TableCryptocurrencies = ({cryptocurrencies}) => {
  return (
    <div className="wrapper">
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Last Volume</th>
          <th>Market</th>
        </tr>
        </thead>
        <tbody>
        <ListTableItems cryptocurrencies={cryptocurrencies}/>
        </tbody>
      </table>
    </div>
  )
};

TableCryptocurrencies.propTypes = {
  cryptocurrencies: PropTypes.array.isRequired
};

export default TableCryptocurrencies;
