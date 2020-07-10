import { urlGetCryptocurrenciesAvailable as url } from "../data/urls";

const apiGetCryptoCurrenciesNames = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    return { Message: "Error" };
  }
};

export default apiGetCryptoCurrenciesNames;
