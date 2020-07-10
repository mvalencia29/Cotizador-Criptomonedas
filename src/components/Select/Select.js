import React from "react";
import {
  Select as ComboBox,
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

const Select = (props) => {
  const { optionSelected, handleChange, label, options } = props;

  return (
    <FormControl variant="outlined" style={{ minWidth: 230 }} margin="dense">
      <InputLabel>{label}</InputLabel>
      <ComboBox
        fullWidth
        value={optionSelected}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.code}>
            {option.name}
          </MenuItem>
        ))}
      </ComboBox>
    </FormControl>
  );
};

export default Select;
