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
<<<<<<< HEAD
    Trip_ID: {
      type: Sequelize.INTEGER,
      references: {
        model: Trips,
        key: "id"
      }
    }
=======
    // TripID: DataTypes.INTEGER

>>>>>>> 4bd75385d9c8f1469dae234e8430f148f714286e
  });
  return groceries;
};
