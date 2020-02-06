module.exports = function(sequelize, DataTypes) {
  const bedrooms = sequelize.define("bedrooms", {
    reserved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    name: DataTypes.STRING,
    Trip_ID: {
      type: Sequelize.INTEGER,
      references: {
        model: Trips,
        key: "id"
      }
    }
  });
  return bedrooms;
};
