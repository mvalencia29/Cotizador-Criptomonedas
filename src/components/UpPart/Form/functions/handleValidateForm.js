export default function handleValidateForm(
  selects,
  setSnackbarError,
  getCryptoCurrencyValue
) {
  if (isthereEmptySelects(selects)) {
    setSnackbarError({
      open: true,
      message: "Completa los campos",
    });
    return;
  }

  getCryptoCurrencyValue(selects.cryptoSelected, selects.currencySelected);
}

function isthereEmptySelects(Selects) {
  if (Selects.currencySelected === "" || Selects.cryptoSelected === "") {
    return true;
  }
  return false;
}
