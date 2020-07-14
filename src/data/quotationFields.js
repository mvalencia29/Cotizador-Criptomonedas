import { v4 as uuid } from "uuid";

const quotationFields = {
  PRICE: { id: uuid(), name: "PRICE", component: null },
  OPENDAY: { id: uuid(), name: "OPENDAY", component: null },
  HIGHDAY: { id: uuid(), name: "HIGHDAY", component: null },
  LOWDAY: { id: uuid(), name: "LOWDAY", component: null },
  OPEN24HOUR: { id: uuid(), name: "OPEN24HOUR", component: null },
  HIGH24HOUR: { id: uuid(), name: "HIGH24HOUR", component: null },
  LOW24HOUR: { id: uuid(), name: "LOW24HOUR", component: null },
  OPENHOUR: { id: uuid(), name: "OPENHOUR", component: null },
  HIGHHOUR: { id: uuid(), name: "HIGHHOUR", component: null },
  LOWHOUR: { id: uuid(), name: "LOWHOUR", component: null },
  CHANGE24HOUR: { id: uuid(), name: "CHANGE24HOUR", component: null },
  CHANGEPCT24HOUR: { id: uuid(), name: "CHANGEPCT24HOUR", component: null },
  CHANGEDAY: { id: uuid(), name: "CHANGEDAY", component: null },
  CHANGEPCTDAY: { id: uuid(), name: "CHANGEPCTDAY", component: null },
  HANGEHOUR: { id: uuid(), name: "CHANGEHOUR", component: null },
  CHANGEPCTHOUR: { id: uuid(), name: "CHANGEPCTHOUR", component: null },
};

export default quotationFields;
