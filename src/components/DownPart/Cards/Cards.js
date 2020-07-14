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
      {data.map((fields) => (
        <Card key={fields.id} name={fields.name} value={fields.value} />
      ))}
    </Container>
  );
};

export default Cards;
