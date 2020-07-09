import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Container from "./Styles";
import Form from "./Form/Form";
import callApiGetCryptoOptions from "./functions/callApiGetCryptoOptions";

const UpPart = () => {
  
  const [loading, setLoading] = useState();

  const [
    responseCallApiCryptoOptions,
    setResponseCallApiCryptoOptions,
  ] = useState();

  useEffect(() => {
    callApiGetCryptoOptions(setResponseCallApiCryptoOptions, setLoading);
  }, []);

  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
};

export default UpPart;
