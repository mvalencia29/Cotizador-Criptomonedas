import { urlGetCryptocurrenciesAvailable as url } from "../data/urls";

const getCryptocurrenciesAvailable = async () => {
  try {
    const response = await fetch(url);
    return JSON.parse(response);
  } catch (e) {
    return { Message: "Error" };
  }
};

export default getCryptocurrenciesAvailable;
