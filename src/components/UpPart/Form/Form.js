import React from "react";
import { Container, ContainerForm, ButtonSave } from "./Styles";
import TextField from "@material-ui/core/TextField";

const Form = () => {
  return (
    <Container>
      <ContainerForm>
        <TextField margin="dense" label="Outlined" variant="outlined" />
        <TextField margin="dense" label="Outlined" variant="outlined" />
        <ButtonSave variant="contained" color="primary">
          Consultar
        </ButtonSave>
      </ContainerForm>
    </Container>
  );
};

export default Form;
