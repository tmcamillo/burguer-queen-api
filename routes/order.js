const router = require("express").Router();
const order = require("../controllers/orders");

router.get("/", order.getOrders);
router.get("/:id", order.getOrdersById);
router.post("/", order.postOrders);
router.put("/:id", order.putOrders);
router.delete("/:id", order.deleteOrder);

module.exports = route;
