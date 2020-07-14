import React from "react";
import styled from "styled-components";
import downIcon from "../../../../../images/icon-down.svg";

const Text = styled.h3`
  color: #dc414c;
`;

const Img = styled.img`
  margin-bottom: 5px;
  margin-right: 5px;
`;

const DownResult = ({ value }) => {
  return (
    <Text>
      <Img src={downIcon} alt="upIcon" />
      {value}
    </Text>
  );
};

export default DownResult;
