import { useParams } from "react-router-dom";
import { useCountry } from "../Context/CountryContext";
import { useEffect } from "react";

export const Destination = () => {
  const { countryId } = useParams();
  console.log(
    "🚀 ~ file: Destination.jsx:7 ~ Destination ~ countryId:",
    countryId
  );
  const { countryStates, countryDispatch } = useCountry();
  const getCountryData = () => {};

  useEffect(() => {
    getCountryData();
  }, []);

  return <div></div>;
};
