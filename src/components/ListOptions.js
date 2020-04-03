import React from 'react';
import PropTypes from 'prop-types';

import SelectItem from './SelectItem';

const ListOptions = ({cryptocurrenciesPrice}) => {
  return (
    <>
      {cryptocurrenciesPrice.map((item, index) => {
        return (
          <SelectItem key={index} item={item}/>
        )
      })}
    </>
  )
};

ListOptions.propTypes = {
  cryptocurrenciesPrice: PropTypes.array.isRequired
};

export default ListOptions;