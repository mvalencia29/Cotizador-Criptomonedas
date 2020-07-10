import React from "react";
import { Container, ContainerForm, ButtonSave } from "./Styles";
import useSelectOptions from "../../../hooks/useSelectOptions";
import currenciesOptions from "../../../data/currencies";
import isthereEmptySelects from "./functions/isThereEmptySelects";

const Form = ({ cryptoCurrenciesNames, setSnackbarError }) => {
  const [currencySelected, SelectCurrency] = useSelectOptions(
    currenciesOptions,
    "Moneda"
  );
  const [cryptoSelected, SelectCrypto] = useSelectOptions(
    cryptoCurrenciesNames,
    "Criptomoneda"
  );

  const handleOnClick = () => {
    const selects = { currencySelected, cryptoSelected };

    if (isthereEmptySelects(selects)) {
      setSnackbarError({
        open: true,
        message: "Completa los campos",
      });
      return null;
    }

    
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
