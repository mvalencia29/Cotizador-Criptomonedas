import getCryptoCurrencyValue from "./getCryptoCurrencyValue";

export default async function handleGetCryptoCurrencyValue(
  codCryptoCurrency,
  countryValue,
  setSnackbarError,
  setCryptoCurrencyValue
) {
  const result = await getCryptoCurrencyValue(codCryptoCurrency, countryValue);
  if (result === "Error") {
    setSnackbarError({
      open: true,
      message: "Error, Por favor valide su conexion a internet",
    });
    return;
  }
  setCryptoCurrencyValue(result);
  console.log(result);
}
