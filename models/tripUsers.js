module.exports = function(sequelize, DataTypes) {
  const tripUsers = sequelize.define("TripUsers", {
    UserId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    TripId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
  });
  return tripUsers;
};
