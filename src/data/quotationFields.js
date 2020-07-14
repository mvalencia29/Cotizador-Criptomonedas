import { v4 as uuid } from "uuid";

const quotationFields = [
  { id: uuid(), name: "PRICE", text: "Precio", component: null },
  { id: uuid(), name: "OPENDAY", text: "Precio Inicial (Hoy)", component: null },
  { id: uuid(), name: "HIGHDAY", text: "Precio Mas Alto (Hoy)", component: null },
  { id: uuid(), name: "LOWDAY", text: "Precio Mas Bajo (Hoy)", component: null },
  { id: uuid(), name: "OPEN24HOUR", text: "Precio Inicial (24 Horas)", component: null },
  { id: uuid(), name: "HIGH24HOUR", text: "Precio Mas Alto (24 Horas)", component: null },
  { id: uuid(), name: "LOW24HOUR", text: "Precio Mas Bajo (24 Horas)", component: null },
  { id: uuid(), name: "OPENHOUR", text: "Precio Inicial (1 Hora)", component: null },
  { id: uuid(), name: "HIGHHOUR", text: "Precio Mas Alto (1 Hora)", component: null },
  { id: uuid(), name: "LOWHOUR", text: "Precio Mas Bajo (1 Hora)", component: null },
  { id: uuid(), name: "CHANGE24HOUR", text: "Variacion (24 Horas)", component: null },
  { id: uuid(), name: "CHANGEPCT24HOUR", text: "Porcentaje Variacion (24 Horas)", component: null },
  { id: uuid(), name: "CHANGEDAY", text: "Variacion (Hoy)", component: null },
  { id: uuid(), name: "CHANGEPCTDAY", text: "Porcentaje Variacion (Hoy)", component: null },
  { id: uuid(), name: "CHANGEHOUR", text: "Variacion (1 Hora)", component: null },
  { id: uuid(), name: "CHANGEPCTHOUR", text: "Porcentaje Variacion (1 Hora)", component: null },
];

export default quotationFields;
