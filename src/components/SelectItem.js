import React from 'react';
import PropTypes from 'prop-types';

const SelectItem = ({item}) => {
  return (
    <option>
      {item.symbol}
    </option>
  )
};

SelectItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SelectItem;