import getCryptoOptions from "../../../api/getCryptoOptions";

const callApiGetCryptoOptions = async (setResponseApi, setLoading) => {
  setLoading(true);
  const response = await getCryptoOptions();
  setResponseApi(response);
  setLoading(false);
  console.log(response);
};

export default callApiGetCryptoOptions;
