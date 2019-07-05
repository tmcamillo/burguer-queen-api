const express = require("express");
const app = express();
const db = require("./models/index");

app.use(express.json());
app.put(express.urlencoded({ extended: true }));
app.use("/user", require("./routes/user"));
app.use("/order", require("./routes/order"));
// app.use(require("./routes/order"));

app.listen(4567, console.log("servidor rodando"));

db.sequelize.sync();
