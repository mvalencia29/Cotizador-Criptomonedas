import React, { useEffect, useState } from "react";
import { Container, ContainerForm, ButtonSave } from "./Styles";
import useSelectOptions from "../../../hooks/useSelectOptions";
import currenciesOptions from "../../../data/currencies";

const Form = () => {

  const [currencySelected, SelectCurrency] = useSelectOptions(
    currenciesOptions
  );
  const [cryptoSelected, SelectCrypto] = useSelectOptions();

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
