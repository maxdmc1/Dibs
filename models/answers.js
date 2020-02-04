module.exports = function(sequelize, DataTypes) {
  const Answers = sequelize.define("Answers", {
    numBedrooms: DataTypes.INTEGER,
    firstDay: DataTypes.DATE,
    lastDay: DataTypes.DATE
  });
  return Answers;
};
