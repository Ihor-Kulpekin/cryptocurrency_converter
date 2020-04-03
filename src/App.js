import React from 'react';

import Header from './components/Header';
import CryptocurrenciesContainer from './components/CryptocurrenciesContainer';

import './scss/global.scss'

const App = () => {
  return (
    <>
      <Header/>
      <CryptocurrenciesContainer/>
    </>
  );
};

export default App;
