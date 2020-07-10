export default function isthereEmptySelects(Selects) {
  if (Selects.currencySelected === "" || Selects.cryptoSelected === "") {
    return true;
  }
  return false;
}
