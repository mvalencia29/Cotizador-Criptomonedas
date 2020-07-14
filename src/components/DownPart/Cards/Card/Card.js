import React from "react";
import { Container } from "./Styles";

const Card = (props) => {
  const { name, value } = props;

  return (
    <Container>
      <h3>{name}</h3>
      <h3>{value}</h3>
    </Container>
  );
};

export default Card;
