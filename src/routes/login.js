const express = require("express");
const { user } = require("../model");
const jwt = require("jsonwebtoken");

const routes = express.Router();

function generateAccessToken(username) {
  return jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60
  });
}

routes.post("/login", (req, res) => {
  user
    .findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
    .then((result) => {
      if (!result) {
        res.status(405);
        res.end();
      }
      const token = generateAccessToken(req.body.username);
      res.json({ token });
    })
    .catch((err) => {
      console.log(err);
      res.status(405);
    });
});

module.exports = routes;
