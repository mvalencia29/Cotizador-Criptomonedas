import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useSelectOption = (options) => {
  const [optionSelected, setOptionSelected] = useState("");

  const handleChange = (e) => {
    setOptionSelected(e.target.value);
  };

  const SelectComponent = () => {
    return (
      <FormControl variant="outlined" style={{ minWidth: 230 }}>
        <InputLabel>Age</InputLabel>
        <Select
          fullWidth
          value={optionSelected}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">None</MenuItem>
          {options.map((option) => (
            <MenuItem value={option.code}>{option.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };
  return [optionSelected, SelectComponent];
};

useSelectOption.defaultProps = {
    options: [],
};

export default useSelectOption;
