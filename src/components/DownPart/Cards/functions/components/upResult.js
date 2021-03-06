import React from "react";
import styled from "styled-components";
import upIcon from "../../../../../images/icon-up.svg";

const Text = styled.h3`
  color: #1eb589;
  margin: 0;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const Img = styled.img`
  margin-bottom: 5px;
  margin-right: 5px;
`;

const UpResult = ({ value }) => {
  return (
    <Text>
      <Img src={upIcon} alt="upIcon" />
      {value}
    </Text>
  );
};

export default UpResult;
