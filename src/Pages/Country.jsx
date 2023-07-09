import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useCountry } from "../Context/CountryContext";
import { useEffect } from "react";

export const Country = () => {
  const { continentId } = useParams();
  console.log("🚀 ~ file: Country.jsx:8 ~ Country ~ continentId:", continentId);
  const { countryStates, countryDispatch } = useCountry();
  console.log(
    "🚀 ~ file: Country.jsx:10 ~ Country ~ countryStates:",
    countryStates
  );
  const getCountryData = () => {
    const filteredData = countryStates?.continents?.filter(
      (continent) => continent.id == continentId
    );
    console.log(
      "🚀 ~ file: Country.jsx:13 ~ getCountryData ~ filteredData:",
      filteredData
    );
    countryDispatch({ type: "GET_COUNTRY", payload: filteredData });
  };

  useEffect(() => {
    getCountryData();
  }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <Typography variant="h1">Countries</Typography>
      {countryStates?.allcountries?.map((contient) => (
        <div
          key={contient.id}
          style={{ display: "flex", flexDirection: "row", gap: "5px" }}
        >
          {contient?.countries?.map((country) => (
            <Card key={country.id} sx={{ maxWidth: "500px", display: "flex" }}>
              <Link
                to={`/destination/${country.id}`}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <CardMedia
                  image={country.image}
                  sx={{ width: "200px", height: "250px" }}
                />
                <CardContent>{country.name}</CardContent>
              </Link>
            </Card>
          ))}
        </div>
      ))}
    </Box>
  );
};
