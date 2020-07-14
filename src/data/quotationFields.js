import { v4 as uuid } from "uuid";

const quotationFields = [
  { id: uuid(), name: "PRICE", text: "Precio", component: null },
  { id: uuid(), name: "OPENDAY", text: "Precio", component: null },
  { id: uuid(), name: "HIGHDAY", text: "Precio", component: null },
  { id: uuid(), name: "LOWDAY", text: "Precio", component: null },
  { id: uuid(), name: "OPEN24HOUR", text: "Precio", component: null },
  { id: uuid(), name: "HIGH24HOUR", text: "Precio", component: null },
  { id: uuid(), name: "LOW24HOUR", text: "Precio", component: null },
  { id: uuid(), name: "OPENHOUR", text: "Precio", component: null },
  { id: uuid(), name: "HIGHHOUR", text: "Precio", component: null },
  { id: uuid(), name: "LOWHOUR", text: "Precio", component: null },
  { id: uuid(), name: "CHANGE24HOUR", text: "Precio", component: null },
  { id: uuid(), name: "CHANGEPCT24HOUR", text: "Precio", component: null },
  { id: uuid(), name: "CHANGEDAY", text: "Precio", component: null },
  { id: uuid(), name: "CHANGEPCTDAY", text: "Precio", component: null },
  { id: uuid(), name: "CHANGEHOUR", text: "Precio", component: null },
  { id: uuid(), name: "CHANGEPCTHOUR", text: "Precio", component: null },
];

export default quotationFields;
