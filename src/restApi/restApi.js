import {constantsForRestApi} from './constants';

export const getCryptos = async ()=>{
  const response = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD');
  return await response.json();
};