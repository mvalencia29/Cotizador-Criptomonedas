import React, { Fragment, useState } from "react";
import UpPart from "./components/UpPart/UpPart";
import DownPart from "./components/DownPart/DownPart";
import SnackbarAlert from "./components/Snackbar/Snackbar";
import handleGetCryptoCurrencyValue from "./components/DownPart/functions/handleGetCryptoCurrencyValue";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const [snackbarError, setSnackbarError] = useState({
    open: false,
    message: "",
  });

  const [cryptoCurrencyValue, setCryptoCurrencyValue] = useState({});

  const getCryptoCurrencyValue = (codCryptoCurrency, countryValue) => {
    handleGetCryptoCurrencyValue(
      codCryptoCurrency,
      countryValue,
      setSnackbarError,
      setCryptoCurrencyValue,
      setLoading
    );
  };

  return (
    <Fragment>
      <UpPart
        setSnackbarError={setSnackbarError}
        getCryptoCurrencyValue={getCryptoCurrencyValue}
      />
      <DownPart cryptoCurrencyValue={cryptoCurrencyValue} loading={loading} />
      <SnackbarAlert
        snackbarError={snackbarError}
        setSnackbarError={setSnackbarError}
      />
    </Fragment>
  );
};

export default Page;
