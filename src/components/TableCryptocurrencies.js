import React, {useEffect, useState} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css'
import '../scss/table.scss'
import '../scss/global.scss'

const TableCryptocurrencies = ({cryptocurrencies}) => {
  const [className,setClassName] = useState('');

  return (
    <div className="wrapper">
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Change in %</th>
        </tr>
        </thead>
        <tbody>
        {cryptocurrencies.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.FROMSYMBOL}</td>
              <td className={item.FLAGS===1?'up':(item.FLAGS===4?'unchanged':'down')}>{item.PRICE}$</td>
              <td className={item.CHANGE24HOURPCT < 0 ? 'down' : 'up'}>{item.CHANGE24HOURPCT}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
};

export default TableCryptocurrencies;