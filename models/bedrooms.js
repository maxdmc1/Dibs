module.exports = function(sequelize, DataTypes) {
  const bedrooms = sequelize.define("bedrooms", {
    reserved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    name: DataTypes.STRING,
    TripID: DataTypes.INTEGER
  });
  return bedrooms;
};
