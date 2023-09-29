import React from "react";
// import Box from "@mui/material/Box";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import Home from "./pages/home";
import Box from "@mui/material/Box";
import "./App.css";

function App() {
  return (
    <>
      <Box className="wrapper">
        <Container>
          <Grid
            container
            spacing={2}
            direction="column"
            style={{ minHeight: "50vh" }}
          >
            <Home />
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
