import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

const DownPart = ({ loading, cryptoCurrencyValue }) => {
  if (loading) {
    return <LinearProgress />;
  }

  return "Hola";
};

export default DownPart;
