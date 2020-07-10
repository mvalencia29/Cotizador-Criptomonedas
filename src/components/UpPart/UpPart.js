import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Container from "./Styles";
import Form from "./Form/Form";
import handleGetCryptoNames from "./functions/handleGetCryptoNames";

const UpPart = ({ setSnackbarError }) => {
  const [cryptoCurrenciesNames, setCryptoCurrenciesNames] = useState([]);

  useEffect(() => {
    handleGetCryptoNames(setCryptoCurrenciesNames, setSnackbarError);
  }, []);

  return (
    <Container>
      <Header />
      <Form
        cryptoCurrenciesNames={cryptoCurrenciesNames}
        setSnackbarError={setSnackbarError}
      />
    </Container>
  );
};

export default UpPart;
