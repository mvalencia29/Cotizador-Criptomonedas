import getCryptoCurrenciesNames from "./getCryptoCurrenciesNames";

const handleGetCryptoNames = async (
  setCryptoCurrenciesNames,
  setSnackbarError
) => {
  const resultgetCryptoCurrenciesNames = await getCryptoCurrenciesNames();
  if (resultgetCryptoCurrenciesNames === "Error") {
    setSnackbarError({
      open: true,
      message: "Error, Por favor valide su conexion a internet",
    });
  } else {
    setCryptoCurrenciesNames(resultgetCryptoCurrenciesNames);
  }
};

export default handleGetCryptoNames;
