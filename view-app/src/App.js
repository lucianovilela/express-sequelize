import * as React from "react";
import Template from "./template";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from "./login";

export default function (props) {
  return (
    <Router>

      <Template>
        <Routes>
          <Route exact path="/" element={<Login />}>

          </Route>
        </Routes>
      </Template>
    </Router>
  );
}
