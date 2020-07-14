import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  margin-top: 30px;
`;

export const ContainerForm = styled.form`
  max-width: 630px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin: auto;
  @media (max-width: 735px) {
    display: inline-flex;
    flex-direction: column;
    button {
      margin-top: 10px;
      width: 100%;
      height: 35px;
    }
    div {
      width: 100%;
    }
  }
`;

export const ButtonSave = styled(Button)`
  height: 40px;
`;
