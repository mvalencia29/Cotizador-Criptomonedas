import apiGetCryptoCurrencyValue from "../../../services/apiGetCryptoCurrencyValue";

const getCryptoCurrencyValue = async (codCryptoCurrency, countryValue) => {
  const responseApi = await apiGetCryptoCurrencyValue(
    codCryptoCurrency,
    countryValue
  );

  if (thereWasError(responseApi)) {
    return "Error";
  }

  return destructuringCryptoCurrencyValue(
    responseApi,
    codCryptoCurrency,
    countryValue
  );
};

export default getCryptoCurrencyValue;

const thereWasError = (responseApi) => {
  if (responseApi === "Error") {
    return true;
  }
  return false;
};

const destructuringCryptoCurrencyValue = (
  responseApi,
  codCryptoCurrency,
  countryValue
) => {
  return responseApi.DISPLAY[codCryptoCurrency][countryValue];
};
