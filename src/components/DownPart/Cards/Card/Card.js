import React from "react";
import { Container, NameField } from "./Styles";

const Card = (props) => {
  
  const { name, value } = props;

  return (
    <Container>
      <NameField>{name}</NameField>
      {value}
    </Container>
  );
};

export default Card;
