import React from "react";
import { Container, ContainerForm, ButtonSave } from "./Styles";
import useSelectOption from "../../../hooks/useSelectOption";

const Form = () => {
  const [currencySelected, SelectCurrency] = useSelectOption();
  const [criptoSelected, SelectCripto] = useSelectOption();

  return (
    <Container>
      <ContainerForm>
        {console.log(`currencySelected : ${currencySelected}`)}
        {console.log(`currencySelected : ${criptoSelected}`)}
        <SelectCurrency />
        <SelectCripto />
        <ButtonSave variant="contained" color="primary">
          Consultar
        </ButtonSave>
      </ContainerForm>
    </Container>
  );
};

export default Form;
