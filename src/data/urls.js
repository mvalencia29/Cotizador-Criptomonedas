export const urlGetCryptocurrenciesAvailable =
  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

export const urlGetCryptoCurrencyValue = (codCryptoCurrency, countryValue) => {
  return `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${codCryptoCurrency}&tsyms=${countryValue}`;
};
