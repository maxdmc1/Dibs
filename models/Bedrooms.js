module.exports = function(sequelize, DataTypes) {
  const bedrooms = sequelize.define("bedrooms", {
    reserved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
    
  }
  
  );
  return bedrooms;
};