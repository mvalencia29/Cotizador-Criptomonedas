import apiGetCryptoCurrenciesNames from "../../../services/apiGetCryptoCurrenciesNames";

const getCryptoCurrenciesNames = async (setResponseApi) => {
  const response = await apiGetCryptoCurrenciesNames();
  if(validateResponse(response)){
     
  }
};

export default getCryptoCurrenciesNames;

const validateResponse = (response) => {
  if (response.Message === "Error") {
    return false;
  }
  return true;
};
