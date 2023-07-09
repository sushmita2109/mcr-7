import { Box, Card, CardMedia, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCountry } from "../Context/CountryContext";

export const Country = () => {
  const { continentId } = useParams();
  const { countryStates } = useCountry();
  const filteredData = countryStates?.continents?.filter(
    (continent) => continent.id === continentId
  );
  return (
    <Box>
      {filteredData?.countries?.map((country) => (
        <Card key={country.id} sx={{ maxWidth: "500px" }}>
          <Link to={`/${continentId}/${country.id}`}>
            <CardMedia
              image={country.image}
              sx={{ width: "200px", height: "250px" }}
            />
            <div
              style={{
                position: "absolute",
                color: "white",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {country.name}
            </div>
          </Link>
        </Card>
      ))}
    </Box>
  );
};
