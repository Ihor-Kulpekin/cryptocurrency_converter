import React, {useEffect, useState} from 'react';

import '../scss/global.scss';
import '../scss/converterBlock.scss'

const ConverterBlock = ({cryptocurrenciesPrice}) => {

  const [firstInputValue, setFirstInputValue] = useState(1);
  const [secondInputValue, setSecondInputValue] = useState(6348.66/38.76);
  const [firstSelectValue, setFirstSelectValue] = useState('BTC');
  const [secondSelectValue, setSecondSelectValue] = useState('LTC');
  const [firstPrice,setFirstPrice] = useState({});
  const [secondPrice,setSecondPrice] = useState({});

  const handleFirstInputChange = (event) => {
    setFirstInputValue(event.target.value);
  };

  const handleFirstSelectChange = (event) => {
    setFirstSelectValue(event.target.value);
  };

  const handleSecondSelectChange = (event) => {
    setSecondSelectValue(event.target.value);
    if(cryptocurrenciesPrice!==undefined){
      const firstPrice = cryptocurrenciesPrice.find(object=>object.symbol===firstSelectValue);
      const secondPrice = cryptocurrenciesPrice.find(object=>object.symbol===secondSelectValue);
      const result = firstPrice.price/secondPrice.price;
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
            <select className="select" onChange={handleFirstSelectChange} value={firstSelectValue} name="currencies"
                    id="currencies">
              {cryptocurrenciesPrice.map((item, index) => {
                return (
                  <option key={index}>
                    {item.symbol}
                  </option>
                )
              })}
            </select>
            <select className="select" onChange={handleSecondSelectChange} name="currencies" value={secondSelectValue}
                    id="currencies">
              {cryptocurrenciesPrice.map((item, index) => {
                return (
                  <option key={index}>
                    {item.symbol}
                  </option>
                )
              })}
            </select>
            <span>1 {secondSelectValue}={secondPrice.price}$</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ConverterBlock;