const Sequelize = require("sequelize");
const Bedrooms = require("./bedrooms");

module.exports = function(sequelize, DataTypes) {
  const Trips = sequelize.define("Trip", {
    TripName: { type: DataTypes.STRING, allowNull: false },
    numBedrooms: DataTypes.INTEGER,
    firstDay: { type: DataTypes.DATE, allowNull: false },
    lastDay: { type: DataTypes.DATE, allowNull: false },
    userList: {
      type: DataTypes.STRING,

      get: function() {
        return JSON.parse(this.getDataValue("groceryList"));
      },
      set: function(val) {
        return this.setDataValue("groceryList", JSON.stringify(val));
      }
    }
  });

  Trips.associate = function(models) {
    // asscoiating Trips with bedrooms, groceries, schedule
    // when a trip is deleted - will delete any associated data in other tables
    Trips.hasMany(models.Bedrooms, {
      onDelete: "cascade"
    });
    Trips.hasMany(models.Groceries, {
      onDelete: "cascade"
    });
    Trips.hasMany(models.Schedule, {
      onDelete: "cascade"
    });
  };
  return Trips;
};

// module.exports = function(sequelize, DataTypes) {
//   var Author = sequelize.define("Author", {
//     // Giving the Author model a name of type STRING
//     name: DataTypes.STRING
//   });

//   Author.associate = function(models) {
//     // Associating Author with Posts
//     // When an Author is deleted, also delete any associated Posts
//     Author.hasMany(models.Post, {
//       onDelete: "cascade"
//     });
//   };

//   return Author;
// };