export const getExchanges = async ({fromCryptoCurrency, toCryptoCurrency}) => {
  const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=' +
    fromCryptoCurrency + '&tsyms=' + toCryptoCurrency);
  return await response.json();
};