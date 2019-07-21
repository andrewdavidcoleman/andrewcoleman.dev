// const router = require("express").Router();
// const anglersController = require("../../controllers/anglersController");
//
// // Matches with "/api/players"
// router.route("/api/anglers")
//   .get(anglersController.findAll)
//   .post(anglersController.create);
//
// // Matches with "/api/players/:id"
// router
//   .route("anglers/:id")
//   .get(anglersController.findById)
//   .put(anglersController.update)
//   .delete(anglersController.remove);
//
// module.exports = router;

const db = require("../../models");

module.exports = function(app) {

  app.get("/api/anglers", function(req, res) {
    db.Angler.findAll({}).then(function(dbAngler) {
      res.json(dbAngler);
    });
  });

  app.get("/api/angler/:id", function(req, res) {
    db.Angler.findOne({
      where: {
        id: req.params.id
      }
  }).then(function(dbAngler) {
      res.json(dbAngler);
    });
  });

  app.post("/api/authors", function(req, res) {
    console.log(req.body);
    db.Angler.create(req.body).then(function(dbAngler) {
      res.json(dbAngler);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Angler.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAngler) {
      res.json(dbAngler);
    });
  });

};
