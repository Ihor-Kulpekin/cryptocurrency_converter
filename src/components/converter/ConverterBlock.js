import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import '../../scss/global.scss';
import '../../scss/converterBlock.scss'
import ListOptions from './ListOptions';
import {getExchanges} from "../../actions/actions";
import {useDispatch} from "react-redux";

const ConverterBlock = ({cryptocurrenciesPrice}) => {
  const [fromInputValue, setFromInputValue] = useState(1);
  let [toInputValue, setToInputValue] = useState(Number);
  const [fromCryptoCurrency, setFromCryptoCurrency] = useState('BTC');
  const [toCryptoCurrency, setToCryptoCurrency] = useState('LTC');
  const dispatch = useDispatch();

  if (fromInputValue > 0) {
    toInputValue = toInputValue * fromInputValue;
  }

  const handleFirstInputChange = (event) => {
    setFromInputValue(event.target.value);
  };

  const handleSecondInputValue = () => {
    setToInputValue(toInputValue);
  };

  const handleFirstSelectChange = (event) => {
    setFromCryptoCurrency(event.target.value);
  };

  const handleSecondSelectChange = (event) => {
    setToCryptoCurrency(event.target.value);
  };

  useEffect(() => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=' + fromCryptoCurrency + '&tsyms=' + toCryptoCurrency)
      .then((response) => response.json())
      .then((result) => setToInputValue(result[toCryptoCurrency]))
  }, [fromCryptoCurrency, toCryptoCurrency]);

  return (
    <div className="converterBlock">
      <div className="wrapper">
        <div className="inputs">
          <div className="inputText">
            <input className="styleInput" type="number" onChange={handleFirstInputChange} value={fromInputValue}/>
            <input onChange={handleSecondInputValue} className="styleInput" type="number" value={toInputValue}/>
          </div>
          <div>
            <select className="select" onChange={handleFirstSelectChange} value={fromCryptoCurrency} name="currencies">
              <ListOptions cryptocurrenciesPrice={cryptocurrenciesPrice}/>
            </select>
            <select className="select" onChange={handleSecondSelectChange} name="currencies" value={toCryptoCurrency}>
              <ListOptions cryptocurrenciesPrice={cryptocurrenciesPrice}/>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
};

ConverterBlock.propTypes = {
  cryptocurrenciesPrice: PropTypes.array.isRequired
};

export default ConverterBlock;