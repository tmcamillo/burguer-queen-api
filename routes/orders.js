const router = require("express").Router();
const orders = require("../controllers/orders");

router.get("/", orders.getOrders);
router.get("/:id", orders.getOrdersById);
router.post("/", orders.postOrders);
router.put("/:id", orders.putOrders);
router.delete("/:id", orders.deleteOrder);

module.exports = router;
