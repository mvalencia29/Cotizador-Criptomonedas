import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SnackbarAlert({ snackbarError, setSnackbarError }) {
  const handleClose = () => {
    setSnackbarError({
      open: false,
      message: "",
    });
  };

  return (
    <Snackbar
      open={snackbarError.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="error">
        {snackbarError.message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarAlert;
