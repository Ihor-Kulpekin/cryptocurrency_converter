import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../scss/global.scss';
import '../scss/converterBlock.scss'
import ListOptions from "./ListOptions";

const ConverterBlock = ({cryptocurrenciesPrice}) => {

  const [firstInputValue, setFirstInputValue] = useState(1);
  const [secondInputValue, setSecondInputValue] = useState(6348.66 / 38.76);
  const [firstSelectValue, setFirstSelectValue] = useState('BTC');
  const [secondSelectValue, setSecondSelectValue] = useState('LTC');
  const [firstPrice, setFirstPrice] = useState({});
  const [secondPrice, setSecondPrice] = useState({});

  const handleFirstInputChange = (event) => {
    setFirstInputValue(event.target.value);
  };

  const handleFirstSelectChange = (event) => {
    setFirstSelectValue(event.target.value);
  };

  const handleSecondSelectChange = (event) => {
    setSecondSelectValue(event.target.value);
    if (cryptocurrenciesPrice !== undefined) {
      const firstPrice = cryptocurrenciesPrice.find(object => object.symbol === firstSelectValue);
      const secondPrice = cryptocurrenciesPrice.find(object => object.symbol === secondSelectValue);
      const result = firstPrice.price / secondPrice.price;
      setSecondInputValue(result);
      setFirstPrice(firstPrice);
      setSecondPrice(secondPrice);
    }
  };

  return (
    <div className="converterBlock">
      <div className="wrapper">
        <div className="inputs">
          <div className="inputText">
            <input className="styleInput" type="number" onChange={handleFirstInputChange} value={firstInputValue}/>
            <input className="styleInput" type="number" value={secondInputValue}/>
            <span>1{firstSelectValue}={firstPrice.price}$</span>
          </div>
          <div>
            <select className="select" onChange={handleFirstSelectChange} value={firstSelectValue} name="currencies">
              <ListOptions cryptocurrenciesPrice={cryptocurrenciesPrice}/>
            </select>
            <select className="select" onChange={handleSecondSelectChange} name="currencies" value={secondSelectValue}>
              <ListOptions cryptocurrenciesPrice={cryptocurrenciesPrice}/>
            </select>
            <span>1 {secondSelectValue}={secondPrice.price}$</span>
          </div>
        </div>
      </div>
    </div>
  )
};

ConverterBlock.propTypes = {
  cryptocurrenciesPrice:PropTypes.array.isRequired
};

export default ConverterBlock;