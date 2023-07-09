import { createContext, useContext, useEffect, useReducer } from "react";
import { countryReducer, intialStates } from "../Reducer/countryReducer";
import { data } from "../Data/data";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryStates, countryDispatch] = useReducer(
    countryReducer,
    intialStates
  );
  const getData = () => {
    countryDispatch({ type: "GET_DATA", payload: data });
    console.log("🚀 ~ file: CountryContext.jsx:15 ~ getData ~ data:", data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <CountryContext.Provider value={{ countryStates }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
