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
import SignUp from "./signup";
const Home=()=><div></div>;
export default function (props) {
  return (
    <Router>

      <Template>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<SignUp />}/>
          
          
        </Routes>
      </Template>
    </Router>
  );
}
