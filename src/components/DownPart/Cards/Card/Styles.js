import styled from "styled-components";

export const Container = styled.article`
  background: #f0f3fa;
  height: 80px;
  border-radius: 5px;
  justify-content: space-between;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 5px 30px;
  margin-top: 30px;
  @media (max-width: 600px) {
    display: inline-flex;
    flex-direction: column;
    width: -webkit-fill-available;
  }
`;

export const NameField = styled.h3`
  margin: 0;
  color: #131929c7;
  @media (max-width: 600px) {
    margin-top: 13px;
    font-size: 15px;
  }
`;
