import React from "react";
import { Container } from "./Styles";

const Card = (props) => {
  const { name, value } = props;

  console.log(value);

  return (
    <Container>
      <h3>{name}</h3>
      {value}
    </Container>
  );
};

export default Card;
