const router = require("express").Router();
const playerRoutes = require("./anglers");

router.use("/anglers", playerRoutes);

module.exports = router;
