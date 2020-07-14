import React from 'react';
import styled from "styled-components";

const Text = styled.h3`
  color: #1EB589;
`;

const UpResult = ({ value }) => {
  return <Text>{value}</Text>;
};

export default UpResult;

