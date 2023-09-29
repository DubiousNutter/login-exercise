import React from "react";
import Login from "../components/logininfo.jsx";
import Box from "@mui/material/Box";
import { Grid, Container } from "@mui/material";
import FullFeaturedCrudGrid from "../components/infotable";
import { useState } from "react";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Box>
      <Container>
        <Grid>
          <Grid>
            <Login onLogin={handleLogin} />
          </Grid>
          <Grid>{isAuthenticated ? <FullFeaturedCrudGrid /> : null}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
