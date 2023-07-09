import { Card, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useCountry } from "../Context/CountryContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { countryStates } = useCountry();
  console.log("🚀 ~ file: Home.jsx:7 ~ Home ~ countrystates:", countryStates);

  return (
    <Box>
      <Typography variant="h1"> Welcome to trip advisor</Typography>
      <Typography variant="h3">Top Continent for your next holidays</Typography>
      {countryStates?.continents?.map((continent) => (
        <Card key={continent.id} sx={{ maxWidth: "500px" }}>
          <Link to={`/${continent.id}`}>
            <CardMedia
              image={continent.image}
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
              {continent.name}
            </div>
          </Link>
        </Card>
      ))}
    </Box>
  );
};
