module.exports = function(sequelize, DataTypes) {
  const Trips = sequelize.define("Trips", {
    TripName: { type: DataTypes.STRING, allowNull: false },
    numBedrooms: DataTypes.INTEGER,
    firstDay: { type: DataTypes.DATE, allowNull: false },
    lastDay: { type: DataTypes.DATE, allowNull: false },
    // userIDs: {
    //   /*"array of userIds"*/
    // }
  });
  return Trips;
};
