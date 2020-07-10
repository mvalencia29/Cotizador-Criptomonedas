import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Container from "./Styles";
import Form from "./Form/Form";
import getCryptoOptions from "./functions/s";

const UpPart = () => {
  const [
    cryptoOptions,
    setCryptoOptions,
  ] = useState();

  useEffect(() => {
    const responseCryptoOptions = getCryptoOptions();
    
  }, []);

  const handleGetCryptoOptions = () => {

  }

  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
};

export default UpPart;
