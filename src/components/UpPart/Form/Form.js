import React from "react";
import { Container, ContainerForm, ButtonSave } from "./Styles";
import useSelectOptions from "../../../hooks/useSelectOptions";
import currenciesOptions from "../../../data/currencies";
import handleValidateForm from "./functions/handleValidateForm";

const Form = ({
  cryptoCurrenciesNames,
  setSnackbarError,
  getCryptoCurrencyValue,
}) => {
  const [currencySelected, SelectCurrency] = useSelectOptions(
    currenciesOptions,
    "Moneda"
  );
  const [cryptoSelected, SelectCrypto] = useSelectOptions(
    cryptoCurrenciesNames,
    "Criptomoneda"
  );

  const handleOnClick = () => {
    handleValidateForm(
      { currencySelected, cryptoSelected },
      setSnackbarError,
      getCryptoCurrencyValue,
    );
  };

  return (
    <Container>
      <ContainerForm>
        <SelectCurrency />
        <SelectCrypto />
        <ButtonSave variant="contained" color="primary" onClick={handleOnClick}>
          Consultar
        </ButtonSave>
      </ContainerForm>
    </Container>
  );
};

export default Form;
