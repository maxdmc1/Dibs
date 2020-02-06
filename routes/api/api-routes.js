//Worked with Michell on these routes

const db = require("../../models");

const arrayHelpers = {
  get: function() {
    return JSON.parse(this.getDataValue("groceryList"));
  },
  set: function(val) {
    return this.setDataValue("groceryList", JSON.stringify(val));
  }
}

module.exports = {
  postBedroomApi: async function(req, res) {
    const dbBedroom = await db.Bedroom.create(req.body);
    res.json(dbBedroom);
  },
  // GET route for getting all of the bedrooms
  api: function(app) {
    app.get("/api/bedrooms", function(req, res) {
      db.bedrooms.findAll({}).then(function(bedrooms) {
        res.json(bedrooms);
        console.log(bedrooms);
      });
    });

    // POST route for saving a new post
    app.post("/api/bedrooms", function(req, res) {
    // get the data
      console.log(req.body.bedrooms)
      // req.body.groceries
      // // convert data into string
      const bedrooms = req.body.bedrooms;
      console.log(bedrooms)
      // // push into database
      db.bedrooms.create({
      roomNumbers: bedrooms
        })
        .then(function(bedrooms) {
          res.json(bedrooms);
        });
    });

    // PUT route for updating a bedroom

    app.put("/api/bedrooms/:id", function(req, res) {
      console.log(req.params.id);
      db.bedrooms
        .update({
          where: { id: req.params.id }
        })
        .then(function(bedrooms) {
          res.json(bedrooms);
        });
    });

    app.get("/api/answers", function(req, res) {
      db.answers.findAll({}).then(function(answers) {
        res.json(answers);
        console.log(answers);
      });
    });

    // POST route for saving a new post
    app.post("/api/answers", function(req, res) {
      console.log(req.body);
      const answers = req.body.answers;
      db.answers
        .create({
          answer_info: req.body.answers
        })
        .then(function(answers) {
          res.json(answers);
        });
    });

    // PUT route for updating a bedroom

    app.put("/api/answers/:id", function(req, res) {
      console.log(req.params.id);
      db.answers
        .update({
          where: { id: req.params.id }
        })
        .then(function(answers) {
          res.json(answers);
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
      console.log(req.body.groceries)
      // req.body.groceries
      // // convert data into string
      const groceries = JSON.stringify(req.body.groceries);
      console.log(groceries)
      // // push into database
      db.groceries.create({
      groceryList: groceries
        })
        .then(function(groceries) {
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
  }
};
