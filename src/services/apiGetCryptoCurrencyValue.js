import { urlGetCryptoCurrencyValue as url } from "../data/urls";

const apiGetCryptoCurrencyValue = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    return { Message: "Error" };
  }
};

export default apiGetCryptoCurrencyValue;