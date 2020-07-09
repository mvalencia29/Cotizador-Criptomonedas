import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useSelectOption = () => {
  const [optionSelected, setOptionSelected] = useState("");

  const handleChange = (e) => {
    setOptionSelected(e.target.value);
  };

  const SelectComponent = () => {
    return (
      <FormControl variant="outlined" style={{ minWidth: 230 }}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={optionSelected}
          onChange={handleChange}
          label="Age"
          fullWidth
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  };
  return [optionSelected, SelectComponent];
};

export default useSelectOption;
