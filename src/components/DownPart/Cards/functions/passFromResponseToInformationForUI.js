import quotationFields from "../../../../data/quotationFields";
import addComponentValue from "./addComponentValue";

const passFromResponseToInformationForUI = (cryptoCurrencyValue) => {
  return assignComponents(cryptoCurrencyValue, quotationFields);
};

export default passFromResponseToInformationForUI;

const assignComponents = (cryptoCurrencyValue, quotationFields) => {
  const quotationFieldsCopy = [];
  quotationFields.map((field) => {
    quotationFieldsCopy.push(
      assignComponentPerField(cryptoCurrencyValue, field)
    );
  });
  return quotationFieldsCopy;
};

const assignComponentPerField = (cryptoCurrencyValue, field) => {
  switch (field.name) {
    case "PRICE":
      field.component = addComponentValue(cryptoCurrencyValue.PRICE, false);
      break;
    case "OPENDAY":
      field.component = addComponentValue(cryptoCurrencyValue.OPENDAY, false);
      break;
    case "HIGHDAY":
      field.component = addComponentValue(cryptoCurrencyValue.HIGHDAY, false);
      break;
    case "LOWDAY":
      field.component = addComponentValue(cryptoCurrencyValue.LOWDAY, false);
      break;
    case "OPEN24HOUR":
      field.component = addComponentValue(cryptoCurrencyValue.OPEN24HOUR, false);
      break;
    case "HIGH24HOUR":
      field.component = addComponentValue(cryptoCurrencyValue.HIGH24HOUR, false);
      break;
    case "LOW24HOUR":
      field.component = addComponentValue(cryptoCurrencyValue.LOW24HOUR, false);
      break;
    case "OPENHOUR":
      field.component = addComponentValue(cryptoCurrencyValue.OPENHOUR, false);
      break;
    case "HIGHHOUR":
      field.component = addComponentValue(cryptoCurrencyValue.HIGHHOUR, false);
      break;
    case "LOWHOUR":
      field.component = addComponentValue(cryptoCurrencyValue.LOWHOUR, false);
      break;
    case "CHANGE24HOUR":
      field.component = addComponentValue(cryptoCurrencyValue.CHANGE24HOUR, true);
      break;
    case "CHANGEPCT24HOUR":
      field.component = addComponentValue(cryptoCurrencyValue.CHANGEPCT24HOUR, true);
      break;
    case "CHANGEDAY":
      field.component = addComponentValue(cryptoCurrencyValue.CHANGEDAY, true);
      break;
    case "CHANGEPCTDAY":
      field.component = addComponentValue(cryptoCurrencyValue.CHANGEPCTDAY, true);
      break;
    case "CHANGEHOUR":
      field.component = addComponentValue(cryptoCurrencyValue.CHANGEHOUR, true);
      break;
    case "CHANGEPCTHOUR":
      field.component = addComponentValue(cryptoCurrencyValue.CHANGEPCTHOUR, true);
      break;
    default:
      break;
  }
  return field;
};
