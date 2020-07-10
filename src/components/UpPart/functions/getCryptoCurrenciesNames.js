import apiGetCryptoCurrenciesNames from "../../../services/apiGetCryptoCurrenciesNames";

const getCryptoCurrenciesNames = async () => {
  const responseApi = await apiGetCryptoCurrenciesNames();

  if (thereWasError(responseApi)) {
    return "Error";
  }

  return destructuringCodesAndNamesOfTheResponse(responseApi);
};

export default getCryptoCurrenciesNames;

const thereWasError = (responseApi) => {
  if (responseApi.Message === "Error") {
    return true;
  }
  return false;
};

const destructuringCodesAndNamesOfTheResponse = (responseApi) => {
  const cryptoCurriencies = [];

  responseApi.Data.map((cryptoCurrencyInfo) => {
    const cryptoCurrency = {
      id : cryptoCurrencyInfo.CoinInfo.Id,
      code: cryptoCurrencyInfo.CoinInfo.Name,
      name: cryptoCurrencyInfo.CoinInfo.FullName,
    };
    cryptoCurriencies.push(cryptoCurrency);
  });

  return cryptoCurriencies;
};
