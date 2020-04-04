import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {messageSocket} from '../actions/actions';
import ConverterBlock from './converter/ConverterBlock';
import TableCryptocurrencies from './table/TableCryptocurrencies';

const CryptocurrenciesContainer = () => {
  const {cryptocurrencies} = useSelector((state) => state.cryptocurrencies);
  const cryptocurrenciesPrice = useSelector((state)=>state.cryptocurrencies.cryptocurrenciesPrice);
  const dispatch = useDispatch();

  const socketOpen = () => {
    dispatch(messageSocket());
  };

  useEffect(socketOpen, []);

  return (
    <>
      <ConverterBlock cryptocurrenciesPrice={cryptocurrenciesPrice}/>
      <TableCryptocurrencies cryptocurrencies={cryptocurrencies}/>
    </>
  )
};

export default CryptocurrenciesContainer;