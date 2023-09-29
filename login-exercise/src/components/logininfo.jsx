import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Container, Paper } from "@mui/material";
import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "123" && password === "123") {
      onLogin();
    }
  };

  return (
    <>
      <Box>
        <Container>
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            style={{ minHeight: "50vh" }}
          >
            <Paper elevation={2} sx={{ padding: 5 }}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="username"
                    fullWidth
                    label="Username"
                    placeholder="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    fullWidth
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" fullWidth onClick={handleLogin}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Login;
