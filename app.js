const express = require("express");
const app = express();
const db = require("./models/index");

app.use(express.json());
app.put(express.urlencoded({ extended: true }));
app.use("/users", require("./routes/users"));
app.use("/orders", require("./routes/orders"));

app.listen(4567, console.log("servidor rodando"));

db.sequelize.sync();
