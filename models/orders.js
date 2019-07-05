"use strict";
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      status: DataTypes.TEXT,
      uid: DataTypes.INTEGER
    },
    {}
  );
  Orders.associate = function(models) {
    Orders.belongsTo(models.User, { foreignKey: "uid" });
    Orders.hasMany(models.OrderProducts, {
      // as: "OrderProducts",
      foreignKey: "orderId"
    });
  };

  // Orders.create({
  //   status: "Pendente",
  //   uid: 2
  // });
  return Orders;
};
