// const router = require("express").Router();
// const catchesController = require("../../controllers/catchesController");

// Matches with "/api/catches/players/:id"
// router.route("/catches/player/:id")
//   .get(catchesController.findAll)
//   .post(catchesController.create)
//   .put(catchesController.update)
//   .delete(catchesController.remove);
const db = require('../../models');

module.exports = function(app) {
    app.get("/api/catches/playerId/:id", function(req, res) {
      db.Catch.findAll({
          where:{
              caughtById: req.params.id
          }
      }).then(function(dbAngler) {
        res.json(dbAngler);
      });
    });
};
