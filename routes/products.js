const route = require("express").Router();
const models = require("../models");
const products = models.Products;

route.get("/products", (req, resp) => {
  products.findAll().then(prod => {
    resp.send(prod);
  });
});

route.get("/products/:id", (req, resp) => {
  products.findOne({ where: { id: req.params.id } }).then(prod => {
    resp.send(prod);
  });
});

route.post("/products", (req, resp) => {
  products.create(req.body).then(prod => {
    resp.send(prod.dataValues);
  });
});

route.put("/products/:id", (req, resp) => {
  products
    .update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      products.findByPk(req.params.id).then(prod => {
        resp.send(prod.dataValues);
      });
    });
});

route.delete("/products/:id", (req, resp) => {
  products
    .destroy({ where: { id: req.params.id } })
    .then(() => resp.sendStatus(200));
});

module.exports = route;
