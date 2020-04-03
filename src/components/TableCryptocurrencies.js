import React from 'react';

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
        {cryptocurrencies.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.FROMSYMBOL}</td>
              <td className={item.FLAGS===1?'up':'down'}>{item.PRICE}$</td>
              <td>{item.LASTVOLUME}</td>
              <td>{item.MARKET}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
};

export default TableCryptocurrencies;