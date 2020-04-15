import React, {useEffect, useState} from 'react';

import '../global.scss';
import './ConverterBlock.scss';
import './iconStyle.scss';
import '../marginBlocks.scss';

import ListOptions from './ListOptions';
import {getExchanges} from '../../actions/actions';
import {useDispatch, useSelector} from 'react-redux';

const ConverterBlock = () => {
  const [fromInputValue, setFromInputValue] = useState(1);
  const [fromCryptoCurrency, setFromCryptoCurrency] = useState('NEO');
  const [toCryptoCurrency, setToCryptoCurrency] = useState('BTC');
  const [counter, setCounter] = useState(0);
  let exchange = useSelector((state) => state.cryptoExchange.exchanges[toCryptoCurrency]);
  const cryptocurrenciesPrice = useSelector((state) => state.cryptocurrencies.cryptocurrenciesPrice);
  const objectFromTable = useSelector((state) => state.objectFromComponent.objectTable);
  const dispatch = useDispatch();


  if (fromInputValue > 0) {
    exchange = exchange * fromInputValue;
  }

  const getDataFromTable = () => {
    if (counter === 0) {
      setCounter(1);
      setToCryptoCurrency(objectFromTable.FROMSYMBOL);
    } else {
      setFromCryptoCurrency(objectFromTable.FROMSYMBOL);
      setCounter(0)
    }
  };

  const replaceSelects = () => {
    setFromCryptoCurrency(toCryptoCurrency);
    setToCryptoCurrency(fromCryptoCurrency);
  };

  const handleFirstInputChange = (event) => {
    setFromInputValue(event.target.value);
  };

  const handleFirstSelectChange = (event) => {
    setFromCryptoCurrency(event.target.value);
  };

  const handleSecondSelectChange = (event) => {
    setToCryptoCurrency(event.target.value);
  };

  const fetchExchanges = () => {
    dispatch(getExchanges({
      fromCryptoCurrency,
      toCryptoCurrency
    }))
  };

  useEffect(getDataFromTable,[objectFromTable]);

  useEffect(fetchExchanges, [fromCryptoCurrency,toCryptoCurrency]);

  return (
    <div className="converterBlock marginBlocks">
      <div className="wrapper">
        <div className="inputs">
          <div className="inputText">
            <select className="select" onChange={handleFirstSelectChange} value={fromCryptoCurrency} name="currencies">
              <ListOptions cryptocurrenciesPrice={cryptocurrenciesPrice}/>
            </select>
            <input className="styleInput" type="number" onChange={handleFirstInputChange} value={fromInputValue}/>
          </div>
          <div className="icon" onClick={replaceSelects}>
            <i className="icon-exchange"/>
          </div>
          <div className="inputText">
            <select className="select" onChange={handleSecondSelectChange} name="currencies" value={toCryptoCurrency}>
              <ListOptions cryptocurrenciesPrice={cryptocurrenciesPrice}/>
            </select>
            <input className="styleInput" type="number" value={exchange} readOnly/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ConverterBlock;