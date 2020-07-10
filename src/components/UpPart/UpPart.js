import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Container from "./Styles";
import Form from "./Form/Form";
import getCryptoCurrenciesNames from "./functions/getCryptoCurrenciesNames";

const handleGetCryptoNames = (setCryptoCurrenciesNames, setOpenSnackbarError) => {
  const resultgetCryptoCurrenciesNames = getCryptoCurrenciesNames();
  if(resultgetCryptoCurrenciesNames === "Error"){
    setOpenSnackbarError(true);
  }else {
    setCryptoCurrenciesNames(resultgetCryptoCurrenciesNames);
  }
}

const UpPart = (props) => {

  const { setOpenSnackbarError } = props;

  const [
    cryptoCurrenciesNames,
    setCryptoCurrenciesNames,
  ] = useState([]);

  useEffect(() => {
    handleGetCryptoNames(setCryptoCurrenciesNames,setOpenSnackbarError);
  }, []);

  return (
    <Container>
      <Header />
      <Form cryptoCurrenciesNames={cryptoCurrenciesNames} />
    </Container>
  );
};

export default UpPart;
