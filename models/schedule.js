module.exports = function(sequelize, DataTypes) {
  const Schedule = sequelize.define("Schedule", {
    morningMeal: DataTypes.STRING,
    afternoonMeal: DataTypes.STRING,
    eveningMeal: DataTypes.STRING,
    morningActivity: DataTypes.STRING,
    afternoonActivity: DataTypes.STRING,
    eveningActivity: DataTypes.STRING,
    date: { type: DataTypes.DATE, allowNull: false },
    // Trip_ID: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Trips,
    //     key: "id"
    //   }
    // }
  });
  return Schedule;
};
