import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';

const DetailsCryptocurrencyContainer = lazy(() => import('./components/DetailsCryptocurrency/DetailsCryptocurrencyContainer'))
const ConverterBlock = lazy(()=> import('./components/converter/ConverterBlock'))
const CryptocurrenciesContainer = lazy(()=> import('./components/CryptocurrenciesContainer'))

const App = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={<div>Page is Loading...</div>}>
                <Switch>
                    <Route exact path="/">
                        <ConverterBlock/>
                        <CryptocurrenciesContainer/>
                    </Route>
                    <Route path="/cryptocurrencies/:id" component={DetailsCryptocurrencyContainer}/>
                </Switch>
            </Suspense>
        </>
    );
};

export default App;
