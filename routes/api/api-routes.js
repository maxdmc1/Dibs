//Worked with Michell on these routes

const db = require("../../models");
const sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");

const arrayHelpers = {
  get: function() {
    return JSON.parse(this.getDataValue("groceryList"));
  },
  set: function(val) {
    return this.setDataValue("groceryList", JSON.stringify(val));
  }
};

module.exports = {
  postBedroomApi: async function(req, res) {
    const dbBedroom = await db.Bedroom.create(req.body);
    res.json(dbBedroom);
  },
  // GET route for getting all of the bedrooms
  api: function(app) {
    app.get("/api/bedrooms", function(req, res) {
      db.Bedrooms.findAll({}).then(function(Bedrooms) {
        res.json(Bedrooms);
        console.log(Bedrooms);
      });
    });

    // POST route for saving a new post
    app.post("/api/bedrooms", function(req, res) {
      // get the data
      console.log(req.body);
      // req.body.groceries
      // // convert data into string
      const Bedrooms = req.body;
      console.log(Bedrooms);
      // // push into database
      db.Bedrooms.create(req.body).then(function(Bedrooms) {
        console.log("remove me later lol");
        res.json(Bedrooms);
      });
    });

    // PUT route for updating a bedroom

    // app.put("/api/bedrooms/:id", function(req, res) {
    //   console.log(req.params.id);
    //   db.Bedrooms.update(
    //     { reserved: true },
    //     { where: { id: req.params.id } }
    //   ).then(function(Bedrooms) {
    //     res.json(Bedrooms);
    //   });
    // });

    app.put("/api/bedrooms/:id", function(req, res) {
      db.Bedrooms.findOne(
        { where: { id: req.params.id } }.then(updatedBedroom => {
          updatedBedroom.update({
            reserved: true,
            name: req.body
          });
        })
      );
    });

    // Get Route for retrieving grocery list - works
    app.get("/api/groceries", function(req, res) {
      db.Groceries.findAll({}).then(function(groceries) {
        res.json(groceries);
        console.log(groceries);
      });
    });

    // POST route for saving a new grocery list - works
    app.post("/api/groceries", function(req, res) {
      // get the data
      console.log(req.body);
      // req.body.groceries
      // // convert data into string
      const groceries = JSON.stringify(req.body);
      console.log(groceries);
      // // push into database
      db.Groceries.create(req.body).then(function(groceries) {
        res.json(groceries);
      });
    });

    // PUT route for updating a grocery list - sends the updated array to the db - works
    app.put("/api/groceries/:id", function(req, res) {
      console.log(req.params.id);
      console.log(req.body);
      db.Groceries.update(req.body, { where: { id: req.params.id } }).then(
        function(Groceries) {
          console.log(Groceries);
          res.json(Groceries);
        }
      );
    });
    // Post Route for a new Trip - All Trip Routes work
    app.get("/api/trips", function(req, res) {
      db.Trips.findAll({}).then(function(Trips) {
        res.json(Trips);
        console.log(Trips);
      });
    });

    app.get("/api/trips/:userId", async function(req, res) {
      try {
        const userTrips = await db.sequelize.query(
          `SELECT * FROM dibs_db.Trips`,
          //   `SELECT TripName, firstDay FROM dibs_db.TripUsers AS TU
          // JOIN dibs_db.Trips AS T
          // ON TU.TripId = T.id
          // WHERE TU.UserId = 1 `,
          { type: QueryTypes.SELECT }
        );
        console.log(userTrips);
        res.json(userTrips);
      } catch (err) {
        console.log(err);
      }
      // db.Trips.findAll({}).then(function(Trips) {
      //   res.json(Trips);
      //   console.log(Trips);
      // });
    });

    app.post("/api/trips/:userId", function(req, res) {
      console.log(req.body.Trips);
      console.log("HelloThere   ", req.params);
      db.Trips.create(req.body).then(function(Trips) {
        db.TripUsers.create({
          UserId: req.params.userId,
          TripId: Trips.id
        }).then(function(TripsUser) {
          res.json(TripsUser);
        });
        res.json(Trips);
      });
    });

    // PUT route for updating a trip

    app.put("/api/trips/:id", function(req, res) {
      console.log(req.params.id);
      console.log(req.body);
      db.Trips.update(req.body, { where: { id: req.params.id } }).then(function(
        Trips
      ) {
        console.log(Trips);
        res.json(Trips);
      });
    });

    // Routes for Schedule
    // Post a schedule - Post works
    app.post("/api/schedule", function(req, res) {
      console.log(req.body);
      db.Schedule.create(req.body).then(function(Schedule) {
        res.json(Schedule);
      });
    });
    // Get a schedule - needs work
    app.get("/api/schedule/:id", function(req, res) {
      console.log({ id: req.params.id });
      db.Notes.findAll({ where: { id: req.params.id } }).then(function(
        Schedule
      ) {
        console.log(Schedule);
        res.json(Schedule[0]);
      });
    });
    // Get all schedules associated with a Trip - needs work
    app.get("/api/schedules/:id", function(req, res) {
      console.log({ id: req.params.id });
      db.Notes.findAll({ where: { TripId: req.params.id } }).then(function(
        Schedule
      ) {
        console.log(Schedule);
        res.json(Schedule[0]);
      });
    });
    // Update a schedule - works

    app.put("/api/schedule/:id", function(req, res) {
      console.log(req.params.id);
      console.log(req.body);
      db.Schedule.update(req.body, { where: { id: req.params.id } }).then(
        function(Schedule) {
          console.log(Schedule);
          res.json(Schedule);
        }
      );
    });

    // Create Update Destroy routes for tripUsers
    // Get
    app.get("/api/tripUsers", function(req, res) {
      db.Trips.findAll({}).then(function(Trips) {
        res.json(Trips);
        console.log(Trips);
      });
    });
    // Create
    app.post("/api/tripUsers", function(req, res) {
      console.log(req.body);
      db.TripUsers.create(req.body).then(function(TripUsers) {
        res.json(TripUsers);
      });
    });

    // Update route for updating a tripUser
    app.put("/api/tripUsers/:id", function(req, res) {
      console.log(req.params.id);
      console.log(req.body);
      db.TripUsers.update(req.body, { where: { id: req.params.id } }).then(
        function(TripUsers) {
          console.log(TripUsers);
          res.json(TripUsers);
        }
      );
    });
    // Delete
    app.delete("/api/tripUsers", function(req, res) {
      console.log(req.body);
      db.TripUsers.destroy(req.body).then(function(TripUsers) {
        res.json(TripUsers);
      });
    });

    // Create route for my-trips
    app.get("/api/trips/my-trips/:id", function(req, res) {});
  }
};
