import quotationFields from "../../../../data/quotationFields";

const passFromResponseToInformationForUI = (cryptoCurrencyValue) => {
  const quotationFieldsWithTheComponents = assignComponents(cryptoCurrencyValue, quotationFields);
};

export default passFromResponseToInformationForUI;

const assignComponents = (cryptoCurrencyValue, quotationFields) => {
  const quotationFieldsCopy = quotationFields;
  quotationFieldsCopy.PRICE.component = cryptoCurrencyValue.PRICE;
  quotationFieldsCopy.OPENDAY.component = cryptoCurrencyValue.OPENDAY;
  quotationFieldsCopy.HIGHDAY.component = cryptoCurrencyValue.HIGHDAY;
  quotationFieldsCopy.LOWDAY.component = cryptoCurrencyValue.LOWDAY;
  quotationFieldsCopy.OPEN24HOUR.component = cryptoCurrencyValue.OPEN24HOUR;
  quotationFieldsCopy.HIGH24HOUR.component = cryptoCurrencyValue.HIGH24HOUR;
  quotationFieldsCopy.LOW24HOUR.component = cryptoCurrencyValue.LOW24HOUR;
  quotationFieldsCopy.OPENHOUR.component = cryptoCurrencyValue.OPENHOUR;
  quotationFieldsCopy.HIGHHOUR.component = cryptoCurrencyValue.HIGHHOUR;
  quotationFieldsCopy.LOWHOUR.component = cryptoCurrencyValue.LOWHOUR;
  quotationFieldsCopy.CHANGE24HOUR.component = cryptoCurrencyValue.CHANGE24HOUR;
  quotationFieldsCopy.CHANGEPCT24HOUR.component = cryptoCurrencyValue.CHANGEPCT24HOUR;
  quotationFieldsCopy.CHANGEDAY.component = cryptoCurrencyValue.CHANGEDAY;
  quotationFieldsCopy.CHANGEPCTDAY.component = cryptoCurrencyValue.CHANGEPCTDAY;
  quotationFieldsCopy.CHANGEHOUR.component = cryptoCurrencyValue.CHANGEHOUR;
  quotationFieldsCopy.CHANGEPCTHOUR.component = cryptoCurrencyValue.CHANGEPCTHOUR;
  return quotationFieldsCopy;
};
