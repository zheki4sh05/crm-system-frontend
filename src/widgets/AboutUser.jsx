import { CircularProgress, Grid2, TextField } from "@mui/material";
import { useEffect } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { getUserData } from "../app/slices/appUserSlice";

function AboutUser() {

    const user = useSelector(getUserData)

    const handleSubmit = (event) => {
       
      };

    const defaultTheme = createTheme();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
           
            >
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={4}>
                  <TextField
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="Имя"
                    defaultValue={user.name}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="surname"
                    label="Отчество"
                    name="surname"
                    defaultValue={user.surname}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Фамилия"
                    name="lastname"
                    defaultValue={user.lastname}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    defaultValue={user.email}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label="Телефон"
                    type="phone"
                    id="phone"
                    defaultValue={user.phone}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={4}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="datetime-local"
                    name="birth"
                    defaultValue={user.bDay}
                  />
                </Grid2>
              </Grid2>
              <Box>
                <Button
                  type="submit"
                  // disabled={!edited}
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  Сохранить
                </Button>
               
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default AboutUser;