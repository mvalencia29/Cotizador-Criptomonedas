import React, { useState } from "react";
import Select from "../components/Select/Select";

const useSelectCurrencies = (options, label) => {
  const [optionSelected, setOptionSelected] = useState("");

  const handleChange = (e) => {
    setOptionSelected(e.target.value);
  };

  const SelectComponent = () => {
    return (
      <Select
        optionSelected={optionSelected}
        handleChange={handleChange}
        label={label}
        options={options}
      />
    );
  };
  return [optionSelected, SelectComponent];
};

export default useSelectCurrencies;
