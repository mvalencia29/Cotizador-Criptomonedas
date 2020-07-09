import React, { Fragment } from "react";
import { HeaderContainer, HeaderText, DividerObject, DividerContainer } from "./Styles";

const Divider = () => {
  return (<DividerContainer><DividerObject /></DividerContainer>);
}

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderText>Cotizador de Criptomonedas</HeaderText>
      </HeaderContainer>
      <Divider />
    </Fragment>
  );
};

export default Header;
