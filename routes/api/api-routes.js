//Worked with Michell on these routes

const db = require("../../models");

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

    app.put("/api/bedrooms/:id", function(req, res) {
      console.log(req.params.id);
      db.Bedrooms.update(
        { reserved: true },
        { where: { id: req.params.id } }
      ).then(function(Bedrooms) {
        res.json(Bedrooms);
      });
    });

    app.get("/api/groceries", function(req, res) {
      db.groceries.findAll({}).then(function(groceries) {
        res.json(groceries);
        console.log(groceries);
      });
    });

    // POST route for saving a new post
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

    // PUT route for updating a bedroom

    app.put("/api/groceries/:id", function(req, res) {
      console.log(req.params.id);
      db.groceries
        .update({
          where: { id: req.params.id }
        })
        .then(function(groceries) {
          res.json(groceries);
        });
    });
    // Post Route for a new Trip

    app.get("/api/trips", function(req, res) {
      db.Trips.findAll({}).then(function(Trips) {
        res.json(Trips);
        console.log(Trips);
      });
    });

    app.post("/api/trips", function(req, res) {
      console.log(req.body.Trips);
      db.Trips.create(req.body).then(function(Trips) {
        res.json(Trips);
      });
    });

    // PUT route for updating a bedroom

    app.put("/api/trips/:id", function(req, res) {
      console.log(req.params.id);
      db.Trips.update({
        where: { id: req.params.id }
      }).then(function(Trips) {
        res.json(Trips);
      });
    });

    // Routes for notes
    // Post a note
    app.post("/api/notes", function(req, res) {
      console.log(req.body);
      db.Notes.create(req.body).then(function(Notes) {
        res.json(Notes);
      });
    });
    // Get a note
    app.get("/api/notes/:id", function(req, res) {
      console.log({ id: req.params.id });
      db.Notes.findAll({ where: { id: req.params.id } }).then(function(Notes) {
        console.log(Notes);
        res.json(Notes[0]);
      });
    });
    // Update a note
    app.put("/api/notes/:id", function(req, res) {
      console.log(req.params.id);
      db.Notes.update({
        where: { id: req.params.id }
      }).then(function(Notes) {
        res.json(Notes);
      });
    });
    // Routes for Schedule
    // Post a schedule
    app.post("/api/schedule", function(req, res) {
      console.log(req.body);
      db.Schedule.create(req.body).then(function(Schedule) {
        res.json(Schedule);
      });
    });
    // Get a schedule
    app.get("/api/schedule/:id", function(req, res) {
      console.log({ id: req.params.id });
      db.Notes.findAll({ where: { id: req.params.id } }).then(function(
        Schedule
      ) {
        console.log(Schedule);
        res.json(Schedule[0]);
      });
    });
    // Get all schedules associated with a Trip
    app.get("/api/schedules/:id", function(req, res) {
      console.log({ id: req.params.id });
      db.Notes.findAll({ where: { TripId: req.params.id } }).then(function(
        Schedule
      ) {
        console.log(Schedule);
        res.json(Schedule[0]);
      });
    });
    // Update a schedule
    app.put("/api/schedule/:id", function(req, res) {
      console.log(req.params.id);
      db.Schedule.update({
        where: { id: req.params.id }
      }).then(function(Schedule) {
        res.json(Schedule);
      });
    });
  }
};
