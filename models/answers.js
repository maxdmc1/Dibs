module.exports = function(sequelize, DataTypes) {
  const answers = sequelize.define("answers", {
    numBedrooms: DataTypes.INTEGER,
    firstDay: { type: DataTypes.DATE, allowNull: false },
    lastDay: { type: DataTypes.DATE, allowNull: false }
  });
  return answers;
};
