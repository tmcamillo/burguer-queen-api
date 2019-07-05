"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.associate = function(models) {
      User.hasMany(models.Orders, { foreignKey: "uid" });
    };
  };
  return User;
};
