//Worked with Michell on these routes

const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the bedrooms
  app.get("/api/bedrooms", function(req, res) {
    db.bedrooms.findAll({}).then(function(bedrooms) {
      res.json(bedrooms);
      console.log(bedrooms);
    });
  });

  // POST route for saving a new post
  app.post("/api/bedrooms", function(req, res) {
    console.log(req.body);
    db.bedrooms
      .create({
        room_number: req.body.room_number,
        defaultValue: false
      })
      .then(function(bedrooms) {
        res.json(bedrooms);
      });
  });

  // PUT route for updating a bedroom

  app.put("/api/bedrooms/:id", function(req, res) {
    console.log(req.params.id);
    db.bedrooms
      .update(
        {
          where: { id: req.params.id }
        }
      )
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
    db.answers
      .create({
        answer_info: req.body.answer_info
      })
      .then(function(answers) {
        res.json(answers);
      });
  });

  // PUT route for updating a bedroom

  app.put("/api/answers/:id", function(req, res) {
    console.log(req.params.id);
    db.answers
      .update(
        {
          where: { id: req.params.id }
        }
      )
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
    console.log(req.body);
    db.groceries
      .create({
        grocery_list: req.body.grocery_list
      })
      .then(function(groceries) {
        res.json(groceries);
      });
  });

  // PUT route for updating a bedroom

  app.put("/api/groceries/:id", function(req, res) {
    console.log(req.params.id);
    db.groceries
      .update(
        {
          where: { id: req.params.id }
        }
      )
      .then(function(groceries) {
        res.json(groceries);
      });
  });
};
