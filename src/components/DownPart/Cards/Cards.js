import React, { useEffect } from "react";
import Card from "./Card/Card";
import { Container } from "./Styles";

const Cards = ({ cryptoCurrencyValue }) => {
  useEffect(() => {}, [cryptoCurrencyValue]);

  return (
    <Container>
      <Card />
    </Container>
  );
};

export default Cards;
