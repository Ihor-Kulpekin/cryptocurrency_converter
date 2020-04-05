import React from 'react';
import PropTypes from 'prop-types';

import ListTableItems from './ListTableItems';
import './table.scss'
import '../global.scss'
import {getObjectFromComponent} from '../../actions/actions';

const TableCryptocurrencies = ({cryptocurrencies, dispatch}) => {

  const getRowData = (object) => {
    dispatch(getObjectFromComponent(object));
  };

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
        <ListTableItems cryptocurrencies={cryptocurrencies} getRowData={getRowData}/>
        </tbody>
      </table>
    </div>
  )
};

TableCryptocurrencies.propTypes = {
  cryptocurrencies: PropTypes.array.isRequired
};

export default TableCryptocurrencies;
