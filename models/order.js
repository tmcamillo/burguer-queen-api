"use strict";
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      status: DataTypes.TEXT,
      uid: DataTypes.TEXT
    },
    {}
  );
  Orders.associate = function(models) {
    Orders.belongsTo(models.User, { foreignKey: "uid" });
    Orders.hasMany(models.OrderProducts, {
      as: "OrderProducts",
      foreignKey: "orderId"
    });
  };
  return Orders;
};
