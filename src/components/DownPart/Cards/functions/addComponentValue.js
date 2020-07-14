import React from "react";
import NeutralResult from "./components/neutralResult";
import DownResult from "./components/downResult";
import UpResult from "./components/upResult";

const addComponentValue = (value, validateIfIsPositiveOrNegative) => {
  if (validateIfIsPositiveOrNegative) {
    if (value.toString().includes("-")) {
      return <DownResult value={value} />;
    } else {
      return <UpResult value={value} />;
    }
  } else {
    return <NeutralResult value={value} />;
  }
};

export default addComponentValue;
