import quotationFields from "../../../../data/quotationFields";

const passFromResponseToInformationForUI = (cryptoCurrencyValue) => {
  return assignComponents(cryptoCurrencyValue, quotationFields);
};

export default passFromResponseToInformationForUI;

const assignComponents = (cryptoCurrencyValue, quotationFields) => {
  const quotationFieldsCopy = [];
  quotationFields.map((field) => {
    quotationFieldsCopy.push(assignComponentPerField(cryptoCurrencyValue,field))
  });
  return quotationFieldsCopy;
};

const assignComponentPerField = (cryptoCurrencyValue, field) => {
  switch (field.name) {
    case "PRICE":
      field.component = cryptoCurrencyValue.PRICE;
      break;
    case "OPENDAY":
      field.component = cryptoCurrencyValue.OPENDAY;
      break;
    case "HIGHDAY":
      field.component = cryptoCurrencyValue.HIGHDAY;
      break;
    case "LOWDAY":
      field.component = cryptoCurrencyValue.LOWDAY;
      break;
    case "OPEN24HOUR":
      field.component = cryptoCurrencyValue.OPEN24HOUR;
      break;
    case "HIGH24HOUR":
      field.component = cryptoCurrencyValue.HIGH24HOUR;
      break;
    case "LOW24HOUR":
      field.component = cryptoCurrencyValue.LOW24HOUR;
      break;
    case "OPENHOUR":
      field.component = cryptoCurrencyValue.OPENHOUR;
      break;
    case "HIGHHOUR":
      field.component = cryptoCurrencyValue.HIGHHOUR;
      break;
    case "LOWHOUR":
      field.component = cryptoCurrencyValue.LOWHOUR;
      break;
    case "CHANGE24HOUR":
      field.component = cryptoCurrencyValue.CHANGE24HOUR;
      break;
    case "CHANGEPCT24HOUR":
      field.component = cryptoCurrencyValue.CHANGEPCT24HOUR;
      break;
    case "CHANGEDAY":
      field.component = cryptoCurrencyValue.CHANGEDAY;
      break;
    case "CHANGEPCTDAY":
      field.component = cryptoCurrencyValue.CHANGEPCTDAY;
      break;
    case "CHANGEHOUR":
      field.component = cryptoCurrencyValue.CHANGEHOUR;
      break;
    case "CHANGEPCTHOUR":
      field.component = cryptoCurrencyValue.CHANGEPCTHOUR;
      break;
    default:
      break;
  }
  return field;
};
