import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from 'react-router-dom';

const theme = createTheme();
const Bar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="div"
        sx={{ flexGrow: 1 }}
      >

        <Link to="/login">Login</Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default function (props) {
  return (
    <ThemeProvider theme={theme}>
      <Bar />
      <Container component="main">
        <CssBaseline />
        <Box>
          <Box>
            <Box>{props.children}</Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
