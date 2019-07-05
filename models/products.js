"use strict";
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      name: DataTypes.STRING,
      price: DataTypes.REAL,
      meal: DataTypes.STRING
    },
    {}
  );
  Products.associate = function(models) {
    Products.hasMany(models.OrderProducts, {
      as: "OrderProducts",
      foreignKey: "productId"
    });
  };

  // menu.map(ele => {
  //   Products.create(ele);
  // });
  // Products.create({
  //   name: "Hamburguer Simples - Carne",
  //   price: 10,
  //   meal: "lunch"
  // });

  return Products;
};
