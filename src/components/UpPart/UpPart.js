import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Container from "./Styles";
import Form from "./Form/Form";
import handleGetCryptoNames from "./functions/handleGetCryptoNames";

const UpPart = ({ setSnackbarError, getCryptoCurrencyValue }) => {
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
        getCryptoCurrencyValue={getCryptoCurrencyValue}
      />
    </Container>
  );
};

export default UpPart;
