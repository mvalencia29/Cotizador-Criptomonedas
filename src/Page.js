import React, { Fragment, useState } from "react";
import UpPart from "./components/UpPart/UpPart";
import SnackbarAlert from "./components/Snackbar";

const Page = () => {

    const [ openSnackbar, setOpenSnackbarError ] = useState(false);

  return (
    <Fragment>
      <UpPart setOpenSnackbarError={setOpenSnackbarError} />
      <SnackbarAlert open={openSnackbar} setOpen={setOpenSnackbarError} />
    </Fragment>
  );
};

export default Page;
