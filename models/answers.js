module.exports = function(sequelize, DataTypes) {
  const Answers = sequelize.define("Answers", {
    numBedrooms: DataTypes.INTEGER,
    firstDay: { type: DataTypes.DATE, allowNull: false },
    lastDay: { type: DataTypes.DATE, allowNull: false }
  });
  return Answers;
};
