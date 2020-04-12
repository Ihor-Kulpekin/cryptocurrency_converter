export const getHistoricalData = async (cryptocurrency) => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=' + cryptocurrency + '&tsym=USD&limit=10');
  return await response.json();
};