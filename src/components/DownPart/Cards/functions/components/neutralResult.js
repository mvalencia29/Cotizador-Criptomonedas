import React from 'react'
import styled from "styled-components";

const Text = styled.h3`
  color: #131929c7;
  margin: 0;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const NeutralResult = ({ value }) => {
  return <Text>{value}</Text>;
};

export default NeutralResult;
