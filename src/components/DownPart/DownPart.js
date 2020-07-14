import React, { Fragment } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Cards from "./Cards/Cards";

const DownPart = ({ loading, cryptoCurrencyValue }) => {
  /*if (Object.keys(cryptoCurrencyValue).length === 0) {
    return null;
  }

  if (loading) {
    return <LinearProgress />;
  }*/

  return (
    <Fragment>
      <Cards cryptoCurrencyValue={cryptoCurrencyValue} />
    </Fragment>
  );
};

export default DownPart;
