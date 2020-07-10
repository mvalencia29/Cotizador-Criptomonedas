import { urlGetCryptoCurrencyValue as url } from "../data/urls";

const apiGetCryptoCurrencyValue = async (codCryptoCurrency, countryValue) => {
  try {
    const response = await fetch(url(codCryptoCurrency, countryValue));
    return response.json();
  } catch (e) {
    return "Error";
  }
};

export default apiGetCryptoCurrencyValue;
