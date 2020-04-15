import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import ConverterBlock from './components/converter/ConverterBlock';
import CryptocurrenciesContainer from './components/CryptocurrenciesContainer';
import DetailsCryptocurrencyContainer from './components/DetailsCryptocurrency/DetailsCryptocurrencyContainer';

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <ConverterBlock/>
          <CryptocurrenciesContainer/>
        </Route>
        <Route path="/cryptocurrencies/:id" component={DetailsCryptocurrencyContainer}/>
      </Switch>
    </>
  );
};

export default App;
