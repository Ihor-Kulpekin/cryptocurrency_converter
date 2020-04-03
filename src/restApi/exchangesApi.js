export const getExchanges = async (payload) => {
  const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=LTC');
  return await response.json();
};