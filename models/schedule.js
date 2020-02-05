module.exports = function(sequelize, DataTypes) {
  const Schedule = sequelize.define("Schedule", {
    morningMeal: DataTypes.STRING,
    afternoonMeal: DataTypes.STRING,
    eveningMeal: DataTypes.STRING,
    morningActivity: DataTypes.STRING,
    afternoonActivity: DataTypes.STRING,
    eveningActivity: DataTypes.STRING
  });
  return Schedule;
};
