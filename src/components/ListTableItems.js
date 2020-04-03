import React from 'react';
import PropTypes from 'prop-types';

import TableItem from './TableItem';

const ListTableItems = ({cryptocurrencies}) => {
  return (
    <>
      {cryptocurrencies.map((item, index) => {
        return (
          <TableItem key={index} item={item} index={index}/>
        )
      })}
    </>
  )
};

ListTableItems.propTypes = {
  cryptocurrencies:PropTypes.array.isRequired
};

export default ListTableItems;