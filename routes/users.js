const route = require("express").Router();
const models = require("../models");
const user = models.User;

route.get("/", (req, resp) => {
  user.findAll().then(users => {
    resp.send(users);
  });
});

route.get("/:id", (req, resp) => {
  user.findOne({ where: { id: req.params.id } }).then(users => {
    resp.send(users);
  });
});

route.post("/", (req, resp) => {
  user.create(req.body).then(user => {
    resp.send(user.dataValues);
  });
});

route.put("/:id", (req, resp) => {
  user.update({ ...req.body }, { where: { id: req.params.id } }).then(() => {
    user.findByPk(req.params.id).then(user => {
      resp.send(user.dataValues);
    });
  });
});

route.delete("/:id", (req, resp) => {
  user
    .destroy({ where: { id: req.params.id } })
    .then(() => resp.sendStatus(200));
});

module.exports = route;
