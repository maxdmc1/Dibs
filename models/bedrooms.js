module.exports = function(sequelize, DataTypes) {
  const bedrooms = sequelize.define("bedrooms", {
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    
  }
  
  );
  return bedrooms;
};