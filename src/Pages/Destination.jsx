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
  const getDestinationData = () => {
    const filteredData = countryStates?.allcountries;
    const filteredData1 = filteredData?.map((item) => {
      item.countries.filter((country) => country.id == countryId);
    });
    console.log(
      "🚀 ~ file: Destination.jsx:17 ~ filteredData1 ~ filteredData1:",
      filteredData1
    );
  };

  useEffect(() => {
    getDestinationData();
  }, []);

  return <div></div>;
};
