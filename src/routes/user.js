const express = require("express");
const { user } = require("../model");

const routes = express.Router();

routes.get("/user", (req, res) => {
  user.findAll().then((result) => res.json(result));
});
routes.post("/user", (req, res) => {
  user
    .create({
      nome: req.body.nome,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    .then((result) => res.json(result));
});
routes.get("/user/:id", (req, res) => {
  user.findByPk(req.params.id).then((result) => res.json(result));
});
routes.put("/user/:id", (req, res) => {
  user
    .update(
      {
        nome: req.body.nome,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then((result) => res.json(result));
});
routes.delete("/user/:id", (req, res, next) => {
  user
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) => res.json(result));
});

module.exports = routes;
