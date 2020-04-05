import React from 'react';

import Header from './components/header/Header';
import ConverterBlock from './components/converter/ConverterBlock';
import CryptocurrenciesContainer from './components/CryptocurrenciesContainer';
import './components/global.scss'

const App = () => {
  return (
    <>
      <Header/>
      <ConverterBlock/>
      <CryptocurrenciesContainer/>
    </>
  );
};

export default App;
