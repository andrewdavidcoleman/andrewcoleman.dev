 // const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//
// const playerSchema = new Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true }
// });
//
// const Player = mongoose.model("Player", playerSchema);
//
// module.exports = Player;

module.exports = function(sequelize, DataTypes) {
  const Angler = sequelize.define("Angler", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    catches: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });
  return Angler;
};
