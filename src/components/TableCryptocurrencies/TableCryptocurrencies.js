import React from 'react';
import PropTypes from 'prop-types';

import ListTableItems from './ListTableItems';
import './TableCryptocurrencies.scss';
import '../global.scss';
import '../marginBlocks.scss';
import {getObjectFromComponent} from '../../actions/actions';

const TableCryptocurrencies = ({cryptocurrencies, dispatch}) => {
  const getRowData = (object) => {
    dispatch(getObjectFromComponent(object));
  };

  return (
    <div className="wrapper marginBlocks">
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Last Volume</th>
          <th>Market</th>
          <th>Details</th>
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
