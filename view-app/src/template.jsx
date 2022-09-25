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
import Link from "@mui/material/Link";

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
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

      <nav>
      </nav>
      <Button href="/login" color="inherit"  sx={{ my: 1, mx: 1.5 }}>
        Login
      </Button>
      <Link href="/signup" color="inherit" variant="contained">SignUp</Link>
    </Toolbar>
  </AppBar>
);

export default function (props) {
  return (
    <React.StrictMode>

      <ThemeProvider theme={theme}>
        <Bar />
        <Container component="main">
          <CssBaseline />
          <Box>{props.children}</Box>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
}
