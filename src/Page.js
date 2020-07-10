import React, { Fragment, useState } from "react";
import UpPart from "./components/UpPart/UpPart";
import SnackbarAlert from "./components/Snackbar/Snackbar";

const Page = () => {
  const [snackbarError, setSnackbarError] = useState({
    open: false,
    message: "",
  });

  return (
    <Fragment>
      <UpPart setSnackbarError={setSnackbarError} />
      <SnackbarAlert
        snackbarError={snackbarError}
        setSnackbarError={setSnackbarError}
      />
    </Fragment>
  );
};

export default Page;
