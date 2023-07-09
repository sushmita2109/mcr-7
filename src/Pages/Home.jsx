import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useCountry } from "../Context/CountryContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { countryStates } = useCountry();
  console.log("🚀 ~ file: Home.jsx:7 ~ Home ~ countrystates:", countryStates);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <Typography variant="h1"> Welcome to trip advisor</Typography>
      <Typography variant="h3">Top Continent for your next holidays</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "6px",
          padding: "8px",
        }}
      >
        {countryStates?.continents?.map((continent) => (
          <Card
            key={continent.id}
            sx={{
              maxWidth: "500px",
              display: "flex",
              flexDirection: "row",
              gap: "6px",
            }}
          >
            <Link
              to={`/country/${continent.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardMedia
                image={continent.image}
                sx={{ width: "200px", height: "250px" }}
              />
              <CardContent>{continent.name}</CardContent>
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
