import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import ConverterBlock from './components/converter/ConverterBlock';
import CryptocurrenciesContainer from './components/CryptocurrenciesContainer';
import './components/global.scss'

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <ConverterBlock/>
          <CryptocurrenciesContainer/>
        </Route>
      </Switch>
    </>
  );
};

export default App;
