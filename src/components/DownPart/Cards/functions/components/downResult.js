import React from 'react';
import styled from "styled-components";

const Text = styled.h3`
  color: #DC414C;
`;

const DownResult = ({ value }) => {
  return <Text>{value}</Text>;
};

export default DownResult;

