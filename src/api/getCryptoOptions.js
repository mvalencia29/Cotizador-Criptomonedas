import { urlGetCryptocurrenciesAvailable as url } from "../data/urls";

const getCryptoOptions = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    return { Message: "Error" };
  }
};

export default getCryptoOptions;
