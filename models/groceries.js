module.exports = function(sequelize, DataTypes) {
  const Groceries = sequelize.define("Groceries", {
    text: DataTypes.STRING
  });
  return Groceries;
};
