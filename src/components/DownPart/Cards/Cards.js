import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import { Container } from "./Styles";
import passFromResponseToInformationForUI from "./functions/passFromResponseToInformationForUI";

const Cards = ({ cryptoCurrencyValue }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(passFromResponseToInformationForUI(cryptoCurrencyValue));
  }, [cryptoCurrencyValue]);

  return (
    <Container>
      {data.map((field) => (
        <Card key={field.id} name={field.text} value={field.component} />
      ))}
    </Container>
  );
};

export default Cards;
