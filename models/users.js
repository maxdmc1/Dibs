module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define("Answers", {
    UserName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
  });
  return Users;
};
