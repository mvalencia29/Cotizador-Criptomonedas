import React from 'react'
import styled from "styled-components";

const Text = styled.h3`
  color: #131929c7;
`;

const NeutralResult = ({ value }) => {
  return <Text>{value}</Text>;
};

export default NeutralResult;
