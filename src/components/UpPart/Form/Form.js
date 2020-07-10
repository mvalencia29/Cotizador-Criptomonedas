import React from "react";
import { Container, ContainerForm, ButtonSave } from "./Styles";
import useSelectOptions from "../../../hooks/useSelectOptions";
import currenciesOptions from "../../../data/currencies";

const Form = ({ cryptoCurrenciesNames }) => {

  const [currencySelected, SelectCurrency] = useSelectOptions(
    currenciesOptions, "Moneda"
  );
  const [cryptoSelected, SelectCrypto] = useSelectOptions(
    cryptoCurrenciesNames, "Criptomoneda"
  );

  return (
    <Container>
      <ContainerForm>
        <SelectCurrency />
        <SelectCrypto />
        <ButtonSave variant="contained" color="primary">
          Consultar
        </ButtonSave>
      </ContainerForm>
    </Container>
  );
};

export default Form;
