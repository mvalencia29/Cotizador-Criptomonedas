import React from "react";
import { Container, ContainerForm, ButtonSave } from "./Styles";
import useSelectOption from "../../../hooks/useSelectOption";
import currencies from "../../../data/currencies";

const Form = () => {
  
  const [currencySelected, SelectCurrency] = useSelectOption(currencies);
  //const [criptoSelected, SelectCripto] = useSelectOption();

  return (
    <Container>
      <ContainerForm>
        <SelectCurrency />
        {/*<SelectCripto />*/}
        <ButtonSave variant="contained" color="primary">
          Consultar
        </ButtonSave>
      </ContainerForm>
    </Container>
  );
};

export default Form;
