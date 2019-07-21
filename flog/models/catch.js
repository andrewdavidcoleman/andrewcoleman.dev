

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


// Mongoose ==========================================
// const catchSchema = new Schema({
//     caughtById: { type: String, required: true } ,
//     inches: { type: Number, required: true },
//     speciesId: { type: Number, required: false }
// });
//
// const Catch = mongoose.model("Catch", catchSchema);
//
// module.exports = Catch;


// Sequelize ==========================================
module.exports = function(sequelize, DataTypes) {
  const Catch = sequelize.define("Catch", {
    id: {
        primaryKey: true,
        type:DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    caughtById: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    speciesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        len: [1]
        }
    }
  });
  return Catch;
};
