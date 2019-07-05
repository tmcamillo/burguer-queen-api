const models = require("../models");
const order = models.Orders;
const orderProducts = models.OrderProducts;
const products = models.Products;
const user = models.User;

const getOrders = (req, res) =>
  order
    .findAll({ include: [{ model: orderProducts, include: [products] }, user] })
    .then(order => res.send(order));

const getOrdersById = (req, res) =>
  order
    .findByPk(req.params.id, {
      include: [{ model: orderProducts, include: [products], user }]
    })
    .then(order => (order ? res.send(order) : res.sendStatus(404)));

const postOrders = (req, res) =>
  order.create(req.body, { include: [orderProducts] }).then(order => {
    res.status(201).send(order);
  });

const putOrders = (req, res) => {
  order.update({ ...req.body }, { where: { id: req.params.id } }).then(() => {
    order.findByPk(req.params.id).then(order => {
      res.send(order.dataValues);
    });
  });
};

const deleteOrder = (req, res) => {
  orderProducts.destroy({ where: { orderId: req.params.id } });
  order
    .destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
};

module.exports = {
  getOrders,
  getOrdersById,
  postOrders,
  putOrders,
  deleteOrder
};
