import React from 'react';

import Header from './components/header/Header';
import CryptocurrenciesContainer from './components/CryptocurrenciesContainer';

import './components/global.scss'

const App = () => {
  return (
    <>
      <Header/>
      <CryptocurrenciesContainer/>
    </>
  );
};

export default App;
