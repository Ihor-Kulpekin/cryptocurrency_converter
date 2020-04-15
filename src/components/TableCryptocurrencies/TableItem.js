import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, NavLink} from 'react-router-dom';

import './TableCryptocurrencies.scss'
import GraphicCryptocurrency from '../DetailsCryptocurrency/GraphicCryptocurrency';
import {Button} from "antd";

const TableItem = ({item, index, getRowData}) => {
  return (
    <tr className="selectedTd" onClick={() => getRowData(item)}>
      <td>{index + 1}</td>
      <td>{item.FROMSYMBOL}</td>
      <td className={item.FLAGS === 1 ? 'up' : 'down'}>$ {item.PRICE}</td>
      <td>{item.LASTVOLUME}</td>
      <td>{item.MARKET}</td>
      <td>
        <NavLink className="navLinkActive"  to={"/cryptocurrencies/" + item.FROMSYMBOL+"/overview"}>
          <Button className="buttonItem">See</Button>
        </NavLink>
        <Switch>
          <Route path={"/cryptocurrencies/:id/overview"} component={GraphicCryptocurrency}/>
        </Switch>
      </td>
    </tr>
  )
};

TableItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default TableItem;