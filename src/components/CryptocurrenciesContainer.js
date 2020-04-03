import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {messageSocket} from '../actions/actions';
import ConverterBlock from './ConverterBlock';
import TableCryptocurrencies from './TableCryptocurrencies';

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