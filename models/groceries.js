//Need to test this

module.exports = function(sequelize, DataTypes) {
  const groceries = sequelize.define("groceries", {
    groceryList: {
      type: DataTypes.STRING,
      get: function() {
        return JSON.parse(this.getDataValue("groceryList"));
      },
      set: function(val) {
        return this.setDataValue("groceryList", JSON.stringify(val));
      }
    },
    TripID: DataTypes.INTEGER
  });
  return groceries;
};
