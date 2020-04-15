import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {messageSocket} from '../actions/actions';
import TableCryptocurrencies from './TableCryptocurrencies/TableCryptocurrencies';

const CryptocurrenciesContainer = () => {
  const dispatch = useDispatch();
  const {cryptocurrencies} = useSelector((state) => state.cryptocurrencies);

  const socketOpen = () => {
    dispatch(messageSocket());
  };

  useEffect(socketOpen, []);

  return (
    <>
      <TableCryptocurrencies cryptocurrencies={cryptocurrencies} dispatch={dispatch}/>
    </>
  )
};

export default CryptocurrenciesContainer;